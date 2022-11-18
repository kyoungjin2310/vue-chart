<template>
  <div>
    <canvas id="myChartLine"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    //document.getElementById - 화면이 마운트 됐을때 써야 오류가 안생김
    const ctx = document.getElementById('myChartLine').getContext('2d');
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange',
          'Orange',
        ],
        datasets: [
          {
            label: 'Cubic interpolation (monotone)',
            data: [0, 20, 60, 70, 120],
            borderColor: '#333333',
            backgroundColor: '#333333',
            fill: false,
            cubicInterpolationMode: 'monotone',
          },
        ],
      },
      options: {},
    });
  },
};
</script>

<style scoped>
.chart {
  width: 500px;
}
</style>
