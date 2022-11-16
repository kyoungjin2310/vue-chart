<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    //document.getElementById - 화면이 마운트 됐을때 써야 오류가 안생김
    const ctx = document.getElementById('myChart');
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            data: [12, 19, 3, 5, 2, 3],
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
