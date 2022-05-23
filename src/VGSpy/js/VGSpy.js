/**
 * --------------------------------------------------------------------------
 * Module: VGSpy
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

// TODO доделать глобальный офсет и навигацию

class VGSpy {
	constructor(navSection, arg = {}) {
		this.isInit = false;

		if (navSection) {
			if (typeof navSection === 'string') {
				navSection = document.querySelector(navSection);
			}

			if (navSection instanceof HTMLElement) {
				this.settings = {
					offset: navSection.dataset.offset ? navSection.dataset.offset : arg.offset || 0,
					isState: navSection.dataset.state && navSection.dataset.state === 'false' ? !navSection.dataset.state : arg.state || true,
					onActive: arg.onActive || null,
					activeClass: arg.activeClass ? arg.activeClass.trim().split(' ') : ['active']
				};

				this.callback = this.settings.onActive;
				this.links = navSection.querySelectorAll('[data-target]').length ?
					navSection.querySelectorAll('[data-target]') :
					navSection.querySelectorAll('a')
				;

				this.isInit = true;

				this.onLoad();
				this.onClick();
				this.onScroll();
			}
		}
	}

	onLoad() {
		if (!this.isInit) return;
		let _this = this;

		window.onload = function () {
			_this.setCurrentSection(null);
		}
	}

	onClick() {
		if (!this.isInit) return;
		let _this = this;

		for (let i = 0; i < this.links.length; i++) {
			this.links[i].onclick = function () {
				_this.setCurrentSection(this);

				return false;
			}
		}
	}

	onScroll() {
		if (!this.isInit) return;
		let _this = this;

		window.onscroll = function () {
			_this.setCurrentSection(null);
		}
	}

	setCurrentSection($link = null) {
		if ($link) {
			let target = this.attributes($link, 'target'),
				offset = this.attributes($link, 'offset'),
				section = document.getElementById(target),
				to = section.offsetTop + (offset);

			if (section) {
				this.removeCurrentActive();
				this.setActive($link, section);
				window.scrollTo(0, to);
			}
		} else {
			for (let i = 0; i < this.links.length; i++) {
				let target = this.attributes(this.links[i], 'target'),
					offset = this.attributes(this.links[i], 'offset'),
					section = document.getElementById(target),
					start = section.offsetTop,
					end = start + section.offsetHeight,
					currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + (offset),
					isInView = currentPosition >= start && currentPosition < end;

				if (isInView) {
					this.removeCurrentActive({ignore: this.links[i]});
					this.setActive(this.links[i], section);
				}
			}
		}
	}

	setActive($link, $section) {
		if (!this.isInit) return;

		const isActive = this.settings.activeClass.every(function (value){
			return $link.classList.contains(value);
		});

		if (!isActive) {
			if ($section) {
				$section.classList.add(...this.settings.activeClass);
			}

			if ($link) {
				$link.classList.add(...this.settings.activeClass);
			}

			if (typeof this.callback === 'function') {
				this.callback($link, $section);
			}
		}
	}

	removeCurrentActive(options = { ignore: null }) {
		for (let i = 0; i < this.links.length; i++) {
			let target = this.attributes(this.links[i], 'target'),
				section = document.getElementById(target);

			if (options.ignore !== this.links[i]) {
				this.links[i].classList.remove(...this.settings.activeClass);
				section.classList.remove(...this.settings.activeClass);
			}
		}
	}

	attributes(self, prop = '') {
		let _this = this,
			target = self.getAttribute('href') || self.dataset.target;

		if (target !== 'undefined' && target.indexOf('#') !== -1) {
			target = target.replace(/(^.+)#/gm, '');
		} else if (target !== 'undefined' && target.indexOf('#') === -1) {
			target = ''
		}

		let offset = self.dataset.offset ? parseInt(self.dataset.offset) : _this.settings.offset;

		if (prop === 'target') return target;
		if (prop === 'offset') return offset;

		return {
			target: target,
			offset: offset
		};
	}
}

let $vg_spy = document.querySelectorAll('[data-vgspy]');
if ($vg_spy.length) {
	for (let $spy of $vg_spy) {
		new VGSpy($spy);
	}
}

export default VGSpy;