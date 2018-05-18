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
  methods: {
    getCorporationList () {
      this.$store.dispatch('corporation-corporationList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          activityRankOption.series[0].data[0].value = response.data.value.list.length
        }
      })
    },
    getLeaveMessageList () {
      this.$store.dispatch('leaveMessage-leaveMessageList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          activityRankOption.series[0].data[3].value = response.data.value.list.length
        }
      })
    },
    getActivityList () {
      this.$store.dispatch('activity-activityList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          activityRankOption.series[0].data[1].value = response.data.value.list.length
        }
      })
    },
    getStudentList () {
      this.$store.dispatch('getUserList', {
        params: {
          pageSize: 10000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          activityRankOption.series[0].data[2].value = response.data.value.list.length
        }
      })
    }
  },
  mounted () {
    this.activityRankChart = echarts.init(this.$refs.activityRank)
    setTimeout(() => {
      this.activityRankChart.setOption(activityRankOption)
    }, 2000)
  },
  created () {
    this.getActivityList()
    this.getLeaveMessageList()
    this.getCorporationList()
    this.getStudentList()
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
