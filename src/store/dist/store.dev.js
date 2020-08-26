"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _vueCookies = _interopRequireDefault(require("vue-cookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { type } from 'ramda'
_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    apiBase: "http://13.58.205.236:8080/",
    imageUrl: "http://f1.redspice.ae/public/",
    ax: _axios["default"].create({
      // baseURL: "https://server.redspice.ae/api/",
      baseURL: "http://13.58.205.236:8080/" // withCredentials: true, 
      // crossDomain: true

    }),
    upload: _axios["default"].create({
      // baseURL: "https://server.redspice.ae/api/",
      baseURL: "http://f1.redspice.ae/public/api/" // withCredentials: true, 
      // crossDomain: true

    }),
    isLoggedIn: false,
    resume: {},
    biodata: {},
    componentName: "",
    resumeNextbtn: true,
    resumePrevbtn: true
  },
  mutations: {
    isLoggedIn: function isLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    biodata: function biodata(state, payload) {
      state.biodata = payload;
    },
    resume: function resume(state, payload) {
      state.resume = _objectSpread({}, state.resume, {
        payload: payload
      });
    },
    resumeNextbtn: function resumeNextbtn(state, payload) {
      state.resumeNextbtn = payload;
    },
    resumePrevbtn: function resumePrevbtn(state, payload) {
      state.resumePrevbtn = payload;
    },
    componentName: function componentName(state, payload) {
      state.componentName = payload;
    }
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return state.isLoggedIn;
    },
    biodata: function biodata(state) {
      return state.biodata;
    },
    resumePrevbtn: function resumePrevbtn(state) {
      return state.resumePrevbtn;
    },
    resumeNextbtn: function resumeNextbtn(state) {
      return state.resumeNextbtn;
    },
    imageUrl: function imageUrl(state) {
      return state.imageUrl;
    },
    componentName: function componentName(state) {
      return state.componentName;
    }
  },
  actions: {
    callApi: function callApi(context, info) {
      return new Promise(function (resolve, reject) {
        var url = info.url,
            params = info.params,
            data = info.data,
            method = info.method; // const withCredentials = true;

        var headers = {
          'Authorization': 'Bearer ' + _vueCookies["default"].get('accessToken'),
          'Content-Type': "application/json",
          'Accept': "application/json"
        };
        context.state.ax.withCredentials = true;
        context.state.ax.request({
          method: method,
          url: url,
          data: data,
          headers: headers,
          params: params
        }).then(function (response) {
          console.log('in the success'); // console.log(response.status);

          resolve(response.data);
        })["catch"](function (error) {
          console.log('in the error'); // console.log(error.response.status);
          // if(error.response.status == 401 && router.name != 'signIn') return router.push({ name: "signIn" });

          reject(error);
        });
      });
    },
    upload: function upload(context, info) {
      return new Promise(function (resolve, reject) {
        var url = info.url,
            params = info.params,
            data = info.data,
            method = info.method; // const withCredentials = true;

        var headers = {
          'Authorization': 'Bearer ' + _vueCookies["default"].get('accessToken'),
          'Content-Type': "multipart/form-data"
        };
        context.state.upload.withCredentials = true;
        context.state.upload.request({
          method: method,
          url: url,
          data: data,
          headers: headers,
          params: params
        }).then(function (response) {
          console.log('in the success'); // console.log(response.status);

          resolve(response.data);
        })["catch"](function (error) {
          console.log('in the error'); // console.log(error.response.status);
          // if(error.response.status == 401 && router.name != 'signIn') return router.push({ name: "signIn" });

          reject(error);
        });
      });
    }
  }
});
exports.store = store;