<template>
  <g-chart type="ColumnChart" :data="chartData" :options="chartOptions" />
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        ['Month', 'Net Profit', 'Revenue', 'Free Cash Flow'],
        ['Feb', 44, 76, 35],
        ['Mar', 55, 85, 41],
        ['Apr', 57, 101, 36],
        ['May', 56, 98, 26],
        ['Jun', 61, 87, 45],
        ['Jul', 58, 105, 48],
        ['Aug', 63, 91, 52],
        ['Sep', 60, 114, 53],
        ['Oct', 66, 94, 41],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        chartArea: {
          width: '90%',
        },
        width: '100%',
        height: 350,
        colors: ['#008ffb', '#00e396', '#feb019'],
        vAxis: { title: '$ (thousands)', titleTextStyle: { bold: true } },
        legend: { position: 'bottom' },
        animation: {
          duration: 500,
          easing: 'linear',
          startup: true,
        },
      },
    };
  },
};
</script>
