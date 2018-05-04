const corporationStatistics = {
  title: {
    text: '最佳社团',
    subtext: '最佳社团排名'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}人'
  },
  toolbox: {
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['街舞社', '篮球社', '学生会', 'AS协会', '书法协会']
  },
  calculable: true,
  series: [
    {
      name: '漏斗图',
      type: 'funnel',
      // left: '10%',
      top: 60,
      // // x2: 80,
      // bottom: 60,
      // width: '80%',
      // height: {totalHeight} - y - y2,
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        normal: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 1
        }
      },
      data: [
        {value: 60, name: '街舞社'},
        {value: 40, name: '篮球社'},
        {value: 20, name: '学生会'},
        {value: 80, name: 'AS协会'},
        {value: 100, name: '书法协会'}
      ]
    }
  ]
}

export default corporationStatistics
