<template>
  <div class="detail-statistics">
    <span class="total">社团人数一共： {{ total }} 人， 男女比例：</span>
    <div class="activity-rank" ref="activityRank"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import activityRankOption from 'shared@/echart/activityRank2'
export default {
  name: getComponentName('activity-rank'),
  data () {
    return {
      activityRankChart: null,
      total: 0,
      man: 0,
      female: 0
    }
  },
  methods: {
    getActivityList () {
      this.$store.dispatch('activity-activityList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.total = Math.floor(Math.random() * 20 + 6)
          console.log(this.total)
          // activityRankOption.series[0].data[0].value = this.man = Math.floor(Math.random() * this.total + 1)
          activityRankOption.series[0].data[0].value = this.man = Math.floor(this.total / 2)
          console.log(this.man)
          activityRankOption.series[0].data[1].value = this.female = this.total - this.man
          console.log(this.female)
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

.activity-rank {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}
</style>
