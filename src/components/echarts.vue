<template>
  <div :id="main" class="echarts" 
    :style="{ width: width }">
  </div>
</template>

<style scoped>
.echarts {
  height: 300px;
  width: 50%;
  /*margin-bottom: -2rem;*/
}
</style>

<script>
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入k线图
require('echarts/lib/chart/candlestick')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/dataZoom')

export default {
  data () {
    return {
      // option: {},
    }
  },
  props: {
    option: Object,
    main: {
      type: String,
      default: function () {
        return 'main'
      }
    },
    width: {
      type: String,
      default: function () {
        return '100%'
      }
    },
  },
  mounted () {
    this.setOption()
  },
  updated() {
    this.setOption()
  },
  watch: {
    '$route': function () {
      this.setOption()
    }
  },
  methods: {
    setOption() {
      var myChart = echarts.init(document.getElementById(this.main))
      // console.log(this.option.series.data[0])
      myChart.setOption(this.option)
    }
  }
}
</script>
