const activityRank = {
  color: ['#fcb23c', '#89d13b', '#64b6fe', '#c7c7cc'],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  legend: {
    data: ['男', '女'],
    show: true
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['60%', '50%'],
      data: [{
        name: '男',
        value: 12
      }, {
        name: '女',
        value: 17
      }],
      label: {
        normal: {
          color: '#000000'
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#000000'
          }
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

export default activityRank
