<template>
  <apex-chart
    type="pie"
    height="350"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
export default {
  data() {
    return {
      // series: 차트에 들어가는 실질적인 데이터를 담는 곳. 배열로 담아야함.
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          height: 350,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return `${Math.floor(val)}%`;
          },
        },
        legend: {
          show: true,
          position: 'bottom',
        },
      },
    };
  },
};
</script>
