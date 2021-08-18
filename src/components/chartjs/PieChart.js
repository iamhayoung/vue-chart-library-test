import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        datasets: [
          {
            backgroundColor: ['#C73E1D', '#F3CA40', '#F2A541', '#90E39A'],
            data: [44, 55, 57, 56],
          },
        ],
      },
      {
        maintainAspectRatio: false, // 윈도우 사이즈 변경 시, 본 캠버스의 Aspect Ratio (width / height)을 유지 여부
        legend: {
          display: true,
          position: 'top',
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat(
                ((currentValue / total) * 100).toFixed(1)
              );
              return currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            },
          },
        },
        responsive: true,
      }
    );
  },
};
