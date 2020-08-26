"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _JobCard = _interopRequireDefault(require("../views/JobAlart/JobCard"));

var _SearchJob = _interopRequireDefault(require("../views/JobAlart/SearchJob"));

var _CreateAlert = _interopRequireDefault(require("../views/JobAlart/CreateAlert"));

var _Signin = _interopRequireDefault(require("../views/JobAlart/Signin.vue"));

var _Resume = _interopRequireDefault(require("../views/JobAlart/Resume/Resume.vue"));

var _accountSettings = _interopRequireDefault(require("@/views/JobAlart/accountSettings"));

var _changeEmail = _interopRequireDefault(require("@/views/JobAlart/AccountSettings/changeEmail"));

var _changePassword = _interopRequireDefault(require("@/views/JobAlart/AccountSettings/changePassword"));

var _addNumber = _interopRequireDefault(require("@/views/JobAlart/AccountSettings/addNumber"));

var _verifyPhoneNumber = _interopRequireDefault(require("@/views/JobAlart/AccountSettings/verifyPhoneNumber"));

var _appliedJobs = _interopRequireDefault(require("@/views/JobAlart/appliedJobs"));

var _default2 = _interopRequireDefault(require("../views/JobAlart/ResumeLayout/default.vue"));

var _premium = _interopRequireDefault(require("../views/JobAlart/ResumeLayout/premium.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import login from '@/views/login_registration/Login.vue'
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  alias: '/',
  name: 'SearchJob',
  component: _SearchJob["default"],
  meta: {
    title: 'JobAlart'
  }
}, {
  path: '/search',
  name: 'search',
  component: _JobCard["default"],
  meta: {
    title: 'search'
  }
}, {
  path: '/defaultResume',
  name: 'defaultResume',
  component: _default2["default"],
  meta: {
    title: 'defaultResume'
  }
}, {
  path: '/premiumResume',
  name: 'premiumResume',
  component: _premium["default"],
  meta: {
    title: 'premiumResume'
  }
}, {
  path: '/create-alert',
  name: 'CreateAlert',
  component: _CreateAlert["default"],
  meta: {
    title: 'Create Alert'
  }
}, {
  path: '/signin',
  name: 'Signin',
  component: _Signin["default"],
  meta: {
    title: 'Signin'
  }
}, {
  path: '/resume',
  name: 'resume',
  component: _Resume["default"],
  meta: {
    title: 'Resume'
  }
}, {
  path: '/account-settings',
  name: 'accountSettings',
  component: _accountSettings["default"],
  meta: {
    title: 'Account Settings'
  }
}, {
  path: '/applied-jobs',
  name: 'appliedJobs',
  component: _appliedJobs["default"],
  meta: {
    title: 'Applied Jobs'
  }
}, // account settings component routing start
{
  path: '/change-email',
  name: 'changeEmail',
  component: _changeEmail["default"],
  meta: {
    title: 'Change Email'
  }
}, {
  path: '/change-password',
  name: 'changePassword',
  component: _changePassword["default"],
  meta: {
    title: 'Change Password'
  }
}, {
  path: '/add-number',
  name: 'addNumber',
  component: _addNumber["default"],
  meta: {
    title: 'Add Number'
  }
}, {
  path: '/verifyphone',
  name: 'verifyPhoneNumber',
  component: _verifyPhoneNumber["default"],
  meta: {
    title: 'Verify Phone Number'
  }
} // account settings component routing end
];
var router = new _vueRouter["default"]({
  routes: routes,
  mode: 'history'
  /*mode: 'hash'*/

});
var _default = router;
exports["default"] = _default;