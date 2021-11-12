import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

// import VueChartkick from 'vue-chartkick'
// import 'chartkick/chart.js'
import { VueSpinners } from '@saeris/vue-spinners'


import { dollarFilter, percentFilter } from '@/filters'
import router from '@/router'



Vue.use(VueSpinners)
// app.use(VueChartkick)

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
