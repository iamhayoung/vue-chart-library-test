<template>
  <apex-chart
    type="line"
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
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
          ],
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
          },
        },
        markers: {
          size: 3,
          radius: 0,
          colors: ['#F4E04D', '#CEE397', '#E3BAC6'],
          strokeColors: ['#F4E04D', '#CEE397', '#E3BAC6'],
        },
        stroke: {
          curve: 'straight',
          width: 3,
          colors: ['#F4E04D', '#CEE397', '#E3BAC6'],
        },
        legend: {
          show: true,
          markers: {
            fillColors: ['#F4E04D', '#CEE397', '#E3BAC6'],
          },
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
