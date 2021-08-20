<template>
  <div>
    <div>
      <h1>Column Chart</h1>
      <column-chart />
    </div>
    <div>
      <h1>Column Chart</h1>
      <line-chart />
    </div>
    <div>
      <h1>Pie Chart</h1>
      <pie-chart />
    </div>
    <div>
      <h1>Area Chart</h1>
      <area-chart />
    </div>
  </div>
</template>

<script>
import ColumnChart from './googlecharts/ColumnChart';
import LineChart from './googlecharts/LineChart';
import PieChart from './googlecharts/PieChart';
import AreaChart from './googlecharts/AreaChart';

export default {
  name: 'GoogleCharts',
  components: {
    ColumnChart,
    LineChart,
    PieChart,
    AreaChart,
  },
};
</script>

<style></style>
