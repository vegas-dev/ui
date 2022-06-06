// @vegas-dev/apps/VGNav v1.0.0
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports):"function"==typeof define&&define.amd?define(["exports"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function s(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function t(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,n=new Array(s);t<s;t++)n[t]=e[t];return n}function a(e,s){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,s){if(e){if("string"==typeof e)return i(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,s):void 0}}(e))||s&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==t.return||t.return()}finally{if(c)throw o}}}}var o=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(t,n)}return n(e,[{key:"init",value:function(e,s,t){if(this.target="string"==typeof e?e:e.dataset.target||e.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){var n=this;this.sidebar=document.getElementById(n.target),this.button=e,this.settings=Object.assign(n.settings,s),document.body.classList.contains(n.classes.body)&&!n.sidebar.classList.contains("open")&&this.close(t,!0),t&&"function"==typeof t&&t(n)}}},{key:"open",value:function(e){if(!this.sidebar)return!1;var s=this;if(e&&"beforeOpen"in e&&"function"==typeof e.beforeOpen&&e.beforeOpen(s),s.sidebar.classList.add("open"),s.button&&"string"!=typeof s.button&&s.button.classList.add(s.classes.btn),document.body.classList.add(s.classes.body),s.settings.hash){var t=s.sidebar.id;t&&window.history.pushState(null,"sidebar open","#sidebar-open-"+t),window.addEventListener("popstate",(function(t){s.close(e)}),!1)}if(s.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),s.settings.ajax.route&&s.settings.ajax.target){var n=document.getElementById(s.settings.ajax.target);if(n){var i=new XMLHttpRequest;i.open("get",s.settings.ajax.route,!0),i.onload=function(){var e=JSON.parse(i.responseText);o(e)},i.send()}var o=function(e){n.innerHTML=e}}document.onclick=function(t){if(t.target===s.sidebar)return s.close(e),!1},document.onkeyup=function(t){return"Escape"===t.key&&s.close(e),!1};var r,c=a(s.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]'));try{for(c.s();!(r=c.n()).done;){r.value.onclick=function(){return s.close(e),!1}}}catch(e){c.e(e)}finally{c.f()}e&&"afterOpen"in e&&"function"==typeof e.afterOpen&&e.afterOpen(s)}},{key:"close",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.sidebar)return!1;var t=this;if(e&&"beforeClose"in e&&"function"==typeof e.beforeClose&&e.beforeClose(t),s){var n=document.querySelectorAll(".vg-sidebar.open");if(n&&n.length){document.body.classList.remove(t.classes.body);var i,o=a(n);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.classList.remove("open")}}catch(e){o.e(e)}finally{o.f()}var c,l=document.querySelectorAll("."+t.classes.btn),d=a(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.classList.remove(t.classes.btn)}}catch(e){d.e(e)}finally{d.f()}location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else t.sidebar.classList.remove("open"),t.button&&"string"!=typeof t.button&&t.button.classList.remove(t.classes.btn),document.body.classList.remove(t.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),t.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");e&&"afterClose"in e&&"function"==typeof e.afterClose&&e.afterClose(t)}}]),e}();if(window.location.hash){var r=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(r))new o(r).open()}var c,l=a(document.querySelectorAll('[data-toggle="vg-sidebar"]'));try{for(l.s();!(c=l.n()).done;){c.value.onclick=function(e){var s=this,t={content_over:s.dataset.over||!0,hash:s.dataset.hash||!1,ajax:{target:s.dataset.ajaxTarget||"",route:s.dataset.ajaxRoute||""}},n=new o(s,t);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1}}}catch(e){l.e(e)}finally{l.f()}var d=function(){function e(t,n){s(this,e),this.settings=Object.assign({expand:"lg",placement:"horizontal",isHover:!1,toggle:'<span class="default"></span>',mobileTitle:"",sidebar:{placement:"right",clone:null,hash:!1}},t),this.callback=n,this.breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},this.container=".vg-nav",this.sidebar="vg-nav-sidebar",this.classes={container:"vg-nav-wrapper",sidebar:"vg-sidebar",hamburger:"vg-nav-hamburger",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XXL:"vg-nav-xxl",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isInit=!1,this.isInit||this.init(this.callback)}return n(e,[{key:"init",value:function(e){var s=this,t=document.querySelector(s.container),n=document.querySelector("."+s.classes.container);if(!t||!n)return!1;t.classList.add("vg-nav-"+s.settings.expand),s.settings.isHover&&t.classList.add(s.classes.hover);var i=t.querySelectorAll(".dropdown-mega > a, .dropdown > a"),a='<span class="toggle">'+s.settings.toggle+"</span>";i.forEach((function(e){e.insertAdjacentHTML("beforeend",a)}));var o=t.classList.contains(s.classes.XXL)||t.classList.contains(s.classes.XL)||t.classList.contains(s.classes.LG)||t.classList.contains(s.classes.MD)||t.classList.contains(s.classes.SM)||t.classList.contains(s.classes.XS);if(o){var r="";s.settings.mobileTitle&&(r='<span class="'+s.classes.hamburger+'--title">'+s.settings.mobileTitle+"</span>"),t.insertAdjacentHTML("afterbegin",'<a href="#" class="'+s.classes.hamburger+'">'+r+'<span class="'+s.classes.hamburger+'--lines"><span></span><span></span><span></span></span></a>')}var c=document.getElementById(s.sidebar),l=s.settings.sidebar||!1,d=l.placement||"right",u=l.hash?'data-hash="true"':"";if(o)if(c){if("clone"in l&&l.clone){var f=document.querySelector("."+s.classes.sidebar).querySelectorAll(l.clone);f&&s.cloneNavigation(f,t.querySelector("."+s.classes.container))}}else{var h="";s.settings.mobileTitle&&(h='<span class="'+s.classes.sidebar+'-title">'+s.settings.mobileTitle+"</span>"),document.body.insertAdjacentHTML("beforeend",'<div class="'+s.classes.sidebar+" "+d+'" id="'+s.sidebar+'" '+u+'><div class="vg-sidebar-content"><div class="vg-sidebar-header">'+h+'<div class="'+s.classes.sidebar+'-close" data-dismiss="'+s.classes.sidebar+'">&times;</div></div><div class="vg-sidebar-body"></div></div></div>');var v=document.getElementsByClassName(s.classes.sidebar+"-body");s.cloneNavigation(v,t.querySelector("."+s.classes.container))}this.isInit=!0,this.toggle(this.callback)}},{key:"toggle",value:function(e){if(!this.isInit)return!1;var s=this,t=document.querySelector(s.container),n=document.querySelectorAll("."+s.classes.container),i=document.querySelectorAll("."+s.classes.container+" li > a"),a=t.querySelector("."+s.classes.hamburger),r=document.querySelector('[data-dismiss="vg-nav"]');function c(e,s,t){e&&"afterClick"in e&&"function"==typeof e.afterClick&&e.afterClick(s,t)}e&&"afterInit"in e&&"function"==typeof e.afterInit&&e.afterInit(s),i.forEach((function(t){t.onclick=function(t){if(s.clickable())return!1;var i=this,a=i.closest("li");if(function(e,s,t){e&&"beforeClick"in e&&"function"==typeof e.beforeClick&&e.beforeClick(s,t)}(e,s,t),a.classList.contains("dropdown")){if(s.dispose(n,"dropdown-mega"),a.closest("ul").classList.contains(s.classes.container))return a.classList.contains("show")?a.classList.remove("show"):(s.dispose(n),a.classList.add("show")),c(e,s,t),!1;if(a.classList.contains("show"))return i.closest("li").classList.remove("show"),s.dispose(a),c(e,s,t),!1;for(var o=a.children,r=1;r<=o.length;r++)o[r-1].tagName;if(o.length>0)return i.closest("li").classList.add("show"),c(e,s,t),!1}if(a.classList.contains("dropdown-mega"))return a.classList.contains("show")?a.classList.remove("show"):(s.dispose(n),a.classList.add("show")),c(e,s,t),!1;c(e,s,t)}})),window.addEventListener("mouseup",(function(e){e.target.closest("."+s.classes.container)||(s.dispose(n),s.dispose(n,"dropdown-mega"))})),r&&(r.onclick=function(){return s.dispose(n),s.dispose(n,"dropdown-mega"),!1}),a.onclick=function(){var e=this,t=s.sidebar,n={hash:s.settings.sidebar.hash};return new o(t,n).open({beforeOpen:function(){e.classList.add("show")},afterClose:function(){e.classList.remove("show")}}),!1}}},{key:"dispose",value:function(e){for(var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dropdown",t=1;t<=e.length;t++)n(e[t-1].getElementsByClassName(s));function n(e){if(e)for(var s=1;s<=e.length;s++)e[s-1].classList.contains("show")&&e[s-1].classList.remove("show")}}},{key:"cloneNavigation",value:function(e,s){var t=s.cloneNode(!0);t.classList.add(this.classes.cloned),e[0].appendChild(t)}},{key:"clickable",value:function(){return!!document.querySelector(this.container).classList.contains(this.classes.hover)&&this.checkResponsiveClass()}},{key:"checkResponsiveClass",value:function(){var e=document.querySelector(this.container);return e.classList.contains(this.classes.XXL)?this.current_responsive_size=this.breakpoints.xxl:e.classList.contains(this.classes.XL)?this.current_responsive_size=this.breakpoints.xl:e.classList.contains(this.classes.LG)?this.current_responsive_size=this.breakpoints.lg:e.classList.contains(this.classes.MD)?this.current_responsive_size=this.breakpoints.md:e.classList.contains(this.classes.SM)?this.current_responsive_size=this.breakpoints.sm:(e.classList.contains(this.classes.XS),this.current_responsive_size=this.breakpoints.xs),window.innerWidth>=this.current_responsive_size}}]),e}();e.VGNav=d}));
