<template>
  <div class="detail-statistics">
    <div class="polygonaLine" ref="polygonaLine"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import polygonaLineOption from 'shared@/echart/polygonalLine'
export default {
  name: getComponentName('polygonaLine'),
  props: {
    date: Array,
    number: Array
  },
  data () {
    return {
      polygonaLineChart: null,
      total: 0,
      man: 0,
      female: 0
    }
  },
  methods: {
  },
  mounted () {
    polygonaLineOption.xAxis[0].data = this.date
    polygonaLineOption.series[0].data = this.number
    this.polygonaLineChart = echarts.init(this.$refs.polygonaLine)
    setTimeout(() => {
      this.polygonaLineChart.setOption(polygonaLineOption)
    }, 2000)
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.detail-statistics {
  position: relative;
}

.total {
  position: absolute;
  top: 150px;
  left: 0;
  color: #409EFF;
  font-size: 35px;
  z-index: 5;
}

.polygonaLine {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
