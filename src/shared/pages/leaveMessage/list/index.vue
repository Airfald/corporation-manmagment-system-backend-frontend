<template>
  <div class="leave-message-list">
    <div class="leave-message-list__header">我要留言</div>
    <div class="leave-message-list__content">
      <el-alert
        title="接收各种赞扬和批评建议，以及调戏！"
        type="success"
        :closable="false">
      </el-alert>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入留言..."
        v-model="textarea">
      </el-input>
      <el-button class="mt20" type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('leave-message-list')
}
</script>

<style lang="less" scoped>
.leave-message-list {
  border-radius: 10px;
}

.leave-message-list__header {
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>
<style lang="less">
.leave-message-list {
  .el-textarea {
    textarea {
      min-height: 250px !important;
    }
  }
}
</style>
