const activityRank = {
  color: ['#fcb23c', '#89d13b', '#64b6fe', '#c7c7cc'],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      data: [{
        name: '社团个数',
        value: 12
      }, {
        name: '活动个数',
        value: 17
      }, {
        name: '社团人数',
        value: 15
      }, {
        name: '社团留言',
        value: 20
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
