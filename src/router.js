import Vue from 'vue';
import Router from 'vue-router';
import ChartJs from './components/ChartJs';
import ApexCharts from './components/ApexCharts';

Vue.use(Router);

const routes = [
  { path: '/chartjs', component: ChartJs },
  { path: '/apexcharts', component: ApexCharts },
  { path: '*', redirect: '/chartjs' },
];

export default new Router({
  routes,
});
