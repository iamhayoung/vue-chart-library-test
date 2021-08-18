<template>
  <div>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './apexcharts/BarChart.vue';
import LineChart from './apexcharts/LineChart.vue';

export default {
  name: 'ApexCharts',
  components: {
    BarChart,
    LineChart,
  },
};
</script>

<style></style>
