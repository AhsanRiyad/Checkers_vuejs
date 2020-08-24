"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

var _axios = _interopRequireDefault(require("axios"));

var _store = require("./store/store");

var _vueCookies = _interopRequireDefault(require("vue-cookies"));

require("./registerServiceWorker");

require("material-design-icons-iconfont/dist/material-design-icons.css");

require("./sass/job-alart/_defaults.scss");

require("./plugins/vue-toast");

var R = _interopRequireWildcard(require("ramda"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

var _ckeditor5Vue = _interopRequireDefault(require("@ckeditor/ckeditor5-vue"));

var _vueTelInput = _interopRequireDefault(require("vue-tel-input"));

var _vueTelInputVuetify = _interopRequireDefault(require("vue-tel-input-vuetify"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import VueResouce from 'vue-resource'
// Ensure you are using css-loader
//importing style
_vue["default"].prototype.R = R;
_vue["default"].prototype.moment = _moment["default"];
_vue["default"].prototype._ = _lodash["default"];

_vue["default"].use(_ckeditor5Vue["default"]);

_vue["default"].use(_vueTelInput["default"]); //vuetify tel input
// for docs https://github.com/yogakurniawan/vue-tel-input-vuetify


_vue["default"].use(_vueTelInputVuetify["default"]); //for docs
// https://github.com/cmp-cc/vue-cookies#readme


_vue["default"].use(_vueCookies["default"]); // Vue.use(print);
// set default config


_vueCookies["default"].config('7d'); // export const bus = new Vue();


_vue["default"].prototype.$axios = _axios["default"];
_vue["default"].config.productionTip = false;
/*Vue.mixin({
  data: () => ({

  }),
  computed: {

  },
  created: function () {}
})*/

new _vue["default"]({
  router: _router["default"],
  vuetify: _vuetify["default"],
  store: _store.store,
  icons: {
    iconfont: 'mdi'
  },
  render: function render(h) {
    return h(_App["default"]);
  },
  methods: {},
  beforeCreate: function beforeCreate() {//this.$cookies.isKey('email') ? alert(true) : alert(false); 
  }
}).$mount('#app');