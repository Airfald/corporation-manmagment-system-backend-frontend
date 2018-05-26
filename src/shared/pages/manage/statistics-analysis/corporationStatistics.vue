<template>
<div class="wrap">
  <div v-if="show" class="text">
    <span
      v-for="(item, index) in corporationCount"
      :key="index">
      {{ item.name }} : {{ item.value }}票<br>
      </span>
  </div>
  <div class="corporation-statistics" ref="corporationStatistics"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import getComponentName from 'shared@/config/components-define'
import corporationStatisticsOption from 'shared@/echart/corporationStatistics'
export default {
  name: getComponentName('corporation-statistics'),
  data () {
    return {
      corporationStatisticsChart: null,
      ranks: [],
      corporationCount: [],
      show: false
    }
  },
  methods: {
    getStudentList () {
      this.$store.dispatch('getUserList', {
        params: {
          pageSize: 10000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          response.data.value.list.forEach(item => {
            if (item.corporationId) {
              this.ranks.push(item.corporationId)
            }
          })
          this.ranks.sort()
          for (let i = 0; i < this.ranks.length;) {
            let count = 0
            for (let j = i; j < this.ranks.length; j++) {
              if (this.ranks[i] === this.ranks[j]) {
                count++
              }
            }
            this.corporationCount.push({
              corporationId: this.ranks[i],
              value: count
            })
            i = i + count
          }
          this.getCorporations()
        }
      })
    },
    getCorporations () {
      for (let i = 0; i < this.corporationCount.length; i++) {
        this.getCorporationDetail(i, this.corporationCount[i].corporationId)
      }
    },
    getCorporationDetail (index, id) {
      this.$store.dispatch('corporation-view', {
        params: {
          id: id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.corporationCount[index].name = response.data.value.name
        }
      })
    }
  },
  mounted () {
    this.corporationStatisticsChart = echarts.init(this.$refs.corporationStatistics)
  },
  created () {
    this.getStudentList()
    setTimeout(() => {
      corporationStatisticsOption.series[0].data = this.corporationCount
      this.corporationStatisticsChart.setOption(corporationStatisticsOption)
      this.show = true
    }, 2000)
  }
}
</script>
<style lang="less" scoped>
.wrap {
  position: relative;
}

.corporation-statistics {
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
}

.text {
  position: absolute;
  z-index: 5;
  top: 180px;
  left: 50px;
  font-size: 25px;
  color: #409EFF;
}
</style>
