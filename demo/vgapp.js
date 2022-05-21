"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vgsidebar = _interopRequireDefault(require("../VGSidebar/vgsidebar"));

var _vgspy = _interopRequireDefault(require("../VGSpy/vgspy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * Module: VGNav
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
class VGNav {
  constructor(arg, callback) {
    this.settings = Object.assign({
      expand: 'lg',
      // Медиа точка, принцип позаимствован у https://getbootstrap.com/
      placement: 'horizontal',
      // Расположение основной навигации. Либо она горизонтальная (horizontal), либо вертикальная (vertical)
      isHover: false,
      // Выпадающее меню будет открываться при наведении если определено как true, или при клике если false
      toggle: '<span class="default"></span>',
      // Кастомный переключатель для выпадающего списка
      mobileTitle: '' // Помимо иконки (с полосками), можно добавить заголовок, например: "Меню" или "Навигация"

    }, arg); // Функция обратного вызова

    this.callback = callback; // Карта медиа точек см. https://getbootstrap.com/docs/5.2/layout/grid/#grid-options

    this.breakpoints = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }; // Программные переменные

    this.container = '.vg-nav';
    this.sidebar = 'vg-nav-sidebar';
    this.classes = {
      container: 'vg-nav-main-container',
      hamburger: 'vg-nav-hamburger',
      cloned: 'vg-nav-cloned',
      hover: 'vg-nav-hover',
      XXL: 'vg-nav-xxl',
      XL: 'vg-nav-xl',
      LG: 'vg-nav-lg',
      MD: 'vg-nav-md',
      SM: 'vg-nav-sm',
      XS: 'vg-nav-xs'
    };
    this.current_responsive_size = '';
    this.isInit = false;
  }

  init() {}

}

var _default = VGNav;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * --------------------------------------------------------------------------
 * Module: VGSidebar
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
class VGSidebar {
  constructor() {}

  init() {}

  open() {}

  close() {}

}

var _default = VGSidebar;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * --------------------------------------------------------------------------
 * Module: VGSpy
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
class VGSpy {}

var _default = VGSpy;
exports.default = _default;