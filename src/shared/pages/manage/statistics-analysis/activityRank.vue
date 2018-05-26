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
      activityRankChart: null,
      seriesData: [],
      total: 0
    }
  },
  methods: {
    getCorporationList () {
      this.$store.dispatch('corporation-corporationList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          response.data.value.list.forEach(item => {
            this.getCorporationActivity(item.name)
          })
        }
      })
    },
    getCorporationActivity (corporation) {
      this.$store.dispatch('activity-getCorportationActivity', {
        params: {
          corporation: corporation
        }
      }).then(response => {
        this.seriesData.push({
          name: corporation,
          value: response.data.value.length
        })
        this.total += response.data.value.length
      })
    }
  },
  mounted () {
    this.activityRankChart = echarts.init(this.$refs.activityRank)
    setTimeout(() => {
      this.seriesData.forEach(item => {
        item.name += '(' + ((item.value / this.total) * 100).toFixed(2) + '%)'
      })
      activityRankOption.series[0].data = this.seriesData
      this.activityRankChart.setOption(activityRankOption)
    }, 2000)
  },
  created () {
    this.getCorporationList()
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
