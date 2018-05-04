<template>
  <div class="corporation-statistics" ref="corporationStatistics"></div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import corporationStatisticsOption from 'shared@/echart/corporationStatistics'
export default {
  name: getComponentName('corporation-statistics'),
  data () {
    return {
      corporationStatisticsChart: null
    }
  },
  mounted () {
    this.corporationStatisticsChart = echarts.init(this.$refs.corporationStatistics)
    this.corporationStatisticsChart.setOption(corporationStatisticsOption)
  }
}
</script>
<style lang="less" scoped>
.corporation-statistics {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
