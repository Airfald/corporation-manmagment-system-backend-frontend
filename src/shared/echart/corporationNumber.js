const corporationNumber = {
  color: ['#fcb23c', '#3da5fe'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: {
        show: true,
        readOnly: false
      },
      magicType: {
        show: true,
        type: ['line', 'bar']
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  legend: {
    data: ['社团人数', '社团活动']
  },
  xAxis: [
    {
      type: 'category',
      data: ['街舞社', '文学社', '书法社', '滑板社', '滑板社', '滑板社', '滑板社'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#d0d0d0'
        }
      },
      axisLabel: {
        interval: 0,
        rotate: -40,
        fontSize: 12,
        color: '#000000'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '（个）',
      nameTextStyle: {
        color: '#8E8E8E'
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#ebebeb'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d0d0d0'
        }
      },
      axisLabel: {
        formatter: '{value}',
        color: '#8E8E8E'
      }
    },
    {
      type: 'value',
      name: '（个）',
      nameTextStyle: {
        color: '#8E8E8E'
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#ebebeb'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d0d0d0'
        }
      },
      axisLabel: {
        formatter: '{value}',
        color: '#8E8E8E'
      }
    }
  ],
  series: [
    {
      name: '社团人数',
      type: 'line',
      yAxisIndex: 1,
      data: ['50', '37', '74', '47', '12', '85', '256']
    },
    {
      name: '社团活动',
      type: 'bar',
      barWidth: '40%',
      data: ['200', '167', '234', '267', '135', '252', '258']
    }
  ]
}

export default corporationNumber
