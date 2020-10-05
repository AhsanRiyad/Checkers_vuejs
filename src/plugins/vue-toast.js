import Vue from 'vue';
import 'vue-awesome-notifications/dist/styles/style.css';
import VueAWN from 'vue-awesome-notifications';

//for awn docs
// https://f3oall.github.io/awesome-notifications/docs/integrations/vue

let options = {};
options.durations = {
    global: 4000
};
options.labels = {
    warning: 'Warning',
    info: 'Status'
};

options.position = "top-right";

Vue.use(VueAWN, options);
