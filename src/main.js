import Vue from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue-apexcharts';
import VueGoogleCharts from 'vue-google-charts';
import router from './router';

Vue.component('apex-chart', VueApexCharts);
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
