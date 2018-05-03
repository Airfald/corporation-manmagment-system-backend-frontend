<template>
  <div class="activity-list">
    <div class="activity-list__header">活动列表</div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('activity-list')
}
</script>

<style lang="less" scoped>
.activity-list {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}

.activity-list__header {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
