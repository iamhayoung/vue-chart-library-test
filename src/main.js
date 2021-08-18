import Vue from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue-apexcharts';
import router from './router';

Vue.component('apex-chart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
