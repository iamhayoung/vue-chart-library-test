import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            borderColor: '#008ffb',
            pointBackgroundColor: '#008ffb',
            backgroundColor: 'transparent',
          },
          {
            label: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            borderColor: '#00e396',
            pointBackgroundColor: '#00e396',
            backgroundColor: 'transparent',
          },
          {
            label: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            borderColor: '#feb019',
            pointBackgroundColor: '#feb019',
            backgroundColor: 'transparent',
          },
        ],
      },
      {
        maintainAspectRatio: false, // 윈도우 사이즈 변경 시, 본 캠버스의 Aspect Ratio (width / height)을 유지 여부
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false, // X축 그리드선 표시 여부
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: '$ (thousands)',
                fontStyle: 'bold',
              },
              ticks: {
                beginAtZero: true, // 0부터 시작
                maxTicksLimit: 10, // Y축 눈금 최대 수
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              return `$ ${tooltipItem.yLabel} thousands`;
            },
          },
        },
        responsive: true,
        elements: {
          line: {
            fill: false,
            tension: 0,
            borderWidth: 3,
          },
          point: {
            radius: 3,
            hitRadius: 5,
            hoverRadius: 5,
          },
        },
      }
    );
  },
};
