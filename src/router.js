import Vue from 'vue';
import Router from 'vue-router';
import ChartJs from './components/ChartJs';
import ApexCharts from './components/ApexCharts';
import GoogleCharts from './components/GoogleCharts';

Vue.use(Router);

const routes = [
  { path: '/chartjs', component: ChartJs },
  { path: '/apexcharts', component: ApexCharts },
  { path: '/googlecharts', component: GoogleCharts },
  { path: '*', redirect: '/chartjs' },
];

export default new Router({
  routes,
});
