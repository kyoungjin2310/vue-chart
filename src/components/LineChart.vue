<template>
  <div>
    <!-- ref - DOM 선택방법 -->
    <!-- ref를 써야 하는 이유: getElementById는 겹칠 확률이 있어서, 
    컴포넌트 ref를 써야 충돌이 안남 -->
    <canvas ref="lineChart" id="myChartLine"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    //화면이 마운트 됐을때 써야 오류가 안생김
    const ctx = this.$refs.lineChart.getContext('2d');
    // eslint-disable-next-line
    const myChart = new this.$_Chart(ctx, {
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
