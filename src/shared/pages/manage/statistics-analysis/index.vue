<template>
  <div class="statistics-analysis">
    <div class="statistics-analysis__header">数据统计与分析</div>
    <div class="statistics-analysis__content">
      <!-- 1. 柱线图 + 折线图  统计社团人数 和举办的活动数<br>
      2. 饼图    统计社团 + 活动个数 + 社团的人数 + 社团留言<br>
      3. 漏斗图  举办的活动参加人数排名<br> -->
      <corportation-number></corportation-number>
      <div class="mt20 clear">
        <activity-rank class="fl activity-rank-wrap"></activity-rank>
        <corporation-statistics class="fr corporation-statistics-wrap"></corporation-statistics>
      </div>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
import ActivityRank from './activityRank'
import corportationNumber from './corportationNumber'
import corporationStatistics from './corporationStatistics'
export default {
  name: getComponentName('statistics-analysis'),
  components: {
    ActivityRank,
    corportationNumber,
    corporationStatistics
  }
}
</script>

<style lang="less" scoped>
.statistics-analysis {
  border-radius: 10px;
}

.statistics-analysis__header {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}

.activity-rank-wrap {
  width: 49%;
}

.corporation-statistics-wrap {
  width: 49%;
}
</style>
