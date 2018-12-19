import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";
import VueAnalytics from 'vue-analytics';

import 'ionicons/dist/css/ionicons.min.css'

Vue.config.productionTip = false;
import jQuery from 'jquery'
window.$ = jQuery

import 'popper.js/dist/popper.min.js'
import 'bootstrap';
// Vue.use(VueAnalytics, {
//     id: 'UA-75790220',
//     disable: true,
//     debug: {
//       enabled: true,
//         trace: true,
//         sendHitTask: true
//     }
//
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
