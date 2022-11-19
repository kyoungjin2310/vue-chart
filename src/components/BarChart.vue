<template>
  <canvas id="myChart"></canvas>
</template>

<script>
export default {
  props: ['chartDataSet'],
  mounted() {
    //document.getElementById - 화면이 마운트 됐을때 써야 오류가 안생김
    const ctx = document.getElementById('myChart');
    // eslint-disable-next-line
    const myChart = new this.$_Chart(ctx, {
      type: 'bar',
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      data: {
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.chart {
  width: 500px;
}
</style>
