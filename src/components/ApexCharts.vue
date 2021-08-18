<template>
  <div>
    <div>
      <h1>Bar Chart</h1>
      <bar-chart></bar-chart>
    </div>
    <div>
      <h1>Line Chart</h1>
      <line-chart></line-chart>
    </div>
    <div>
      <h1>Pie Chart</h1>
      <pie-chart></pie-chart>
    </div>
  </div>
</template>

<script>
import BarChart from './apexcharts/BarChart.vue';
import LineChart from './apexcharts/LineChart.vue';
import PieChart from './apexcharts/PieChart.vue';

export default {
  name: 'ApexCharts',
  components: {
    BarChart,
    LineChart,
    PieChart,
  },
};
</script>

<style></style>
