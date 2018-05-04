<template>
  <div class="activity-rank" ref="activityRank"></div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import activityRankOption from 'shared@/echart/activityRank'
export default {
  name: getComponentName('activity-rank'),
  data () {
    return {
      activityRankChart: null
    }
  },
  mounted () {
    this.activityRankChart = echarts.init(this.$refs.activityRank)
    this.activityRankChart.setOption(activityRankOption)
  }
}
</script>
<style lang="less" scoped>
.activity-rank {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
