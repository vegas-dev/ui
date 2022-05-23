/**
 * --------------------------------------------------------------------------
 * Module: VGSpy
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

class VGSpy {
	constructor($section, arg, callback) {
		this.settings = Object.assign({
			speed: 500,
			offset: 0,
			hash: true,
		}, arg);

		if ($section) {
			this.init($section, callback)
		}
	}

	init($section, callback) {
		let _this = this,
			$links = $section.querySelectorAll('[data-target]').length ? $section.querySelectorAll('[data-target]') : $section.querySelectorAll('a');

		// Функция обратного вызова после инициализации скрипта
		if (callback && 'afterInit' in callback) {
			if (typeof callback.afterInit === 'function') callback.afterInit(_this)
		}

		if ($links.length) {
			for (let $link of $links) {
				$link.onclick = function () {
					let $_self = this,
						data = _this.attributes($_self);

					if (data.target) {
						let $el = document.getElementById(data.target);
						if (!$el) return;

						for (let i = 1; i <= $links.length; i++) {
							$links[i - 1].classList.remove('active');
						}

						$_self.classList.add('active');

						let top = $el.offsetTop + (data.offset)

						_this.scroll(null, top)
					}

					return false;
				}
				_this.spy($link, $links)
			}
		}
	}

	scroll(pageX = null, pageY = null, clear = false) {
		window.scrollTo(pageX, pageY);

		if (clear) this.clear();
	}

	spy($link, $links) {
		let _this = this;

		sTop($link, window.scrollY)

		window.onscroll = function () {
			let $_self = this

			sTop($link, $_self.pageYOffset);
		}

		function sTop(self, scrollTop) {
			let data = _this.attributes(self),
				$element = null;

			if (data.target && document.getElementById(data.target)) {
				$element = document.getElementById(data.target);
			}

			if ($element) {
				let dist = $element.offsetTop + (data.offset);

				console.log(scrollTop, dist)

				if (scrollTop >= dist) {
					for (let i = 1; i <= $links.length; i++) {
						$links[i - 1].classList.remove('active');
					}

					self.classList.add('active');
				}
			}
		}
	}

	attributes(self) {
		let _this = this,
			target = self.getAttribute('href') || self.dataset.target;

		if (target !== 'undefined' && target.indexOf('#') !== -1) {
			target = target.replace(/(^.+)#/gm, '');
		} else if (target !== 'undefined' && target.indexOf('#') === -1) {
			target = ''
		}

		let speed = self.dataset.speed ? parseInt(self.dataset.speed) : _this.settings.speed,
			offset = self.dataset.offset ? parseInt(self.dataset.offset) : _this.settings.offset

		return {
			target: target,
			speed: speed,
			offset: offset
		};
	}

	clear() {
		let $vg_spy = document.querySelectorAll('[data-vgspy]');
		if ($vg_spy.length) {
			for (let $spy of $vg_spy) {
				let $links = $spy.querySelectorAll('[data-target]').length ? $spy.querySelectorAll('[data-target]') : $spy.querySelectorAll('a');

				for (let i = 1; i <= $links.length; i++) {
					$links[i - 1].classList.remove('active');
				}
			}
		}
	}
}

let $vg_spy = document.querySelectorAll('[data-vgspy]');
if ($vg_spy.length) {
	for (let $spy of $vg_spy) {
		let params = {
			hash: (!($spy.dataset.hash && $spy.dataset.hash === 'false')),
		};

		new VGSpy($spy, params);
	}
}

export default VGSpy;