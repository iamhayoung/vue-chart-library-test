<template>
  <g-chart type="PieChart" :data="chartData" :options="chartOptions" />
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        ['Team', 'Score'],
        ['Team A', 44],
        ['Team B', 55],
        ['Team C', 20],
        ['Team D', 43],
        ['Team E', 32],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        chartArea: {
          width: '90%',
        },
        legend: {
          position: 'bottom',
        },
        width: '100%',
        height: 350,
        colors: ['#008ffb', '#00e396', '#feb019', '#ff4560', '#775dd0'],
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

<style></style>
