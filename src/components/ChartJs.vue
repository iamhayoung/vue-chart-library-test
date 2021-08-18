<template>
  <div id="app">
    <div>
      <h1>Bar Chart</h1>
      <bar-chart height="350px"></bar-chart>
    </div>

    <div>
      <h1>Line Chart</h1>
      <line-chart height="350px"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from './chartjs/LineChart.js';
import BarChart from './chartjs/BarChart.js';

export default {
  name: 'ChartJs',
  components: {
    LineChart,
    BarChart,
  },
};
</script>

<style></style>
