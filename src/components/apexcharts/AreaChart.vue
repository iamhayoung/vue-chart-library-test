<template>
  <apex-chart
    type="area"
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
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 32, 58, 83, 90],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        xaxis: {
          categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
          ],
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return `$ ${val} thousands`;
            },
          },
        },
      },
    };
  },
};
</script>
