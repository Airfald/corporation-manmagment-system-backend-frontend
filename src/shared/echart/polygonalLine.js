
var data = [['2018-05-05', 116], ['2018-05-10', 129], ['2000-06-07', 135], ['2000-06-08', 86], ['2000-06-09', 73], ['2000-06-10', 85]]

var dateList = data.map(function (item) {
  return item[0]
})
var valueList = data.map(function (item) {
  return item[1]
})

var option = {
  title: [{
    top: '5%',
    left: 'center',
    text: '社团活动统计'
  }],
  tooltip: {
    trigger: 'axis',
    formatter: '{b} : {c}人'
  },
  xAxis: [{
    type: 'category',
    name: '日期',
    data: dateList
  }],
  yAxis: [{
    type: 'value',
    name: '（个）',
    splitLine: {show: false}
  }],
  grid: [{
    bottom: '20%'
  }],
  series: [{
    type: 'line',
    showSymbol: false,
    data: valueList
  }]
}

export default option
