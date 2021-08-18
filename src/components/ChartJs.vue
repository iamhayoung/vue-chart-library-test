<template>
  <div id="app">
    <div>
      <h1>Bar Chart</h1>
      <bar-chart :height="350"></bar-chart>
    </div>

    <div>
      <h1>Line Chart</h1>
      <line-chart :height="350"></line-chart>
    </div>

    <div>
      <h1>Pie Chart</h1>
      <pie-chart :height="350"></pie-chart>
    </div>
  </div>
</template>

<script>
import LineChart from './chartjs/LineChart.js';
import BarChart from './chartjs/BarChart.js';
import PieChart from './chartjs/PieChart.js';

export default {
  name: 'ChartJs',
  components: {
    LineChart,
    BarChart,
    PieChart,
  },
};
</script>

<style></style>
