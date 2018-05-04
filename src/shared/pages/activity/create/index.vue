<template>
  <div class="activity-create">
    <div class="activity-create__header">新建活动</div>
    <div class="activity-create__content">
      <el-alert
        title="请认真填写活动相关的信息！"
        type="success"
        :closable="false">
      </el-alert>
      <el-input
        class="mt15"
        placeholder="请输入活动名称"
        v-model="activity.name">
        <template slot="prepend">活动名称：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入活动地址"
        v-model="activity.address">
        <template slot="prepend">活动地址：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入活动时间"
        v-model="activity.time">
        <template slot="prepend">活动时间：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入负责人名称"
        v-model="activity.name">
        <template slot="prepend">负责人：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入负责人电话"
        v-model="activity.name">
        <template slot="prepend">电话：</template>
      </el-input>
      <el-input
        type="textarea"
        :rows="2"
        class="mt15"
        placeholder="请输入活动简介(必填)..."
        v-model="activity.description">
      </el-input>
      <el-button class="mt20" type="primary">新建活动</el-button>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('activity-create'),
  data () {
    return {
      activity: {
        name: '',
        description: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.activity-create {
}

.activity-create__header {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>
<style lang="less">
.activity-create {
  .el-textarea {
    textarea {
      min-height: 250px !important;
    }
  }
}
</style>
