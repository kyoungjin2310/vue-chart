import Chart from 'chart.js/auto';
export default {
  install(Vue) {
    //한번 불러오고 모든 컴포넌트에서 this.$_Chart로 접근 가능
    //$_ - vue에서 추천하는 접두사 prefix
    Vue.prototype.$_Chart = Chart;
  },
};
