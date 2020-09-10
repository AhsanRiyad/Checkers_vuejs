import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'
// import VueResouce from 'vue-resource'
import axios from 'axios'
import { store } from './store/store'
import VueCookies from 'vue-cookies'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import "./sass/job-alart/_defaults.scss"

import './plugins/vue-toast';

//importing style

import * as R from 'ramda'
Vue.prototype.R = R;

import moment from 'moment'
Vue.prototype.moment = moment;

import _ from 'lodash'
Vue.prototype._ = _;

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

import VueTelInput from 'vue-tel-input';
Vue.use(VueTelInput);

//vuetify tel input
// for docs https://github.com/yogakurniawan/vue-tel-input-vuetify
import VueTelInputVuetify from "vue-tel-input-vuetify";
Vue.use(VueTelInputVuetify);

//for docs
// https://github.com/cmp-cc/vue-cookies#readme
Vue.use(VueCookies);
// Vue.use(print);

// set default config
VueCookies.config('7d');

// export const bus = new Vue();

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//event bus
export const eventBus = new Vue();

/*Vue.mixin({
  data: () => ({

  }),
  computed: {

  },
  created: function () {}
})*/

new Vue({
  router,
  vuetify,
  store: store,
  icons: {
    iconfont: 'mdi',
  },
  render: function (h) { return h(App) },
  methods:{},
  beforeCreate(){

    //this.$cookies.isKey('email') ? alert(true) : alert(false); 
    
  }
}).$mount('#app')
