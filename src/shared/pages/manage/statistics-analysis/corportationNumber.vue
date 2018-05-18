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
      corporationNumberChart: null,
      corporationNumber: [],
      options: [],
      studentList: [],
      names: []
    }
  },
  methods: {
    getCorporationNumber () {
      for (let i = 0; i < this.options.length; i++) {
        this.getStudentList(this.options[i].value)
      }
      // corporationNumberOption.series[0].data = this.corporationNumber
      // corporationNumberOption.xAxis[0].data = this.names
      // console.log(this.corporationNumber)
      // console.log(this.names)
      // console.log(corporationNumberOption)
      setTimeout(() => {
        this.corporationNumberChart.setOption(corporationNumberOption)
      }, 2000)
      console.log(corporationNumberOption)
    },
    getStudentList (id) {
      this.$store.dispatch('studentCorporationRel-getCorporationStudentList', {
        params: {
          id: id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          // this.corporationNumber.push(response.data.value.length)
          corporationNumberOption.series[0].data.push(response.data.value.length)
        }
      })
    },
    getCorporationList () {
      this.$store.dispatch('corporation-corporationList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.options = []
          response.data.value.list.forEach(item => {
            this.options.push({
              value: item.id
            })
            corporationNumberOption.xAxis[0].data.push(item.name)
          })
          this.value = this.options[0].value
          this.getCorporationNumber()
        }
      })
    }
  },
  mounted () {
    this.corporationNumberChart = echarts.init(this.$refs.corporationNumber)
    // this.corporationNumberChart.setOption(corporationNumberOption)
  },
  created () {
    this.getCorporationList()
    console.log(corporationNumberOption)
    corporationNumberOption.series[0].data = []
    corporationNumberOption.xAxis[0].data = []
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
