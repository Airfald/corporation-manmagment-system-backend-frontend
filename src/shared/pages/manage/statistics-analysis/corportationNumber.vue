<template>
  <div class="corporation-number" ref="corporationNumber"></div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import corporationNumberOption from 'shared@/echart/corporationNumber'
export default {
  name: getComponentName('corporation-number'),
  data () {
    return {
      corporationNumberChart: null
    }
  },
  mounted () {
    this.corporationNumberChart = echarts.init(this.$refs.corporationNumber)
    this.corporationNumberChart.setOption(corporationNumberOption)
  }
}
</script>
<style lang="less" scoped>
.corporation-number {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
