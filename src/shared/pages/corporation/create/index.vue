<template>
  <div class="corporation-create">
    <div class="corporation-create__header">新建社团</div>
    <div class="corporation-create__content">
      <el-alert
        title="请认真填写社团相关的信息！"
        type="success"
        :closable="false">
      </el-alert>
      <el-input
        placeholder="请输入社团名称(必填)"
        v-model="corporation.name">
        <template slot="prepend">社团名称：</template>
      </el-input>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入社团简介(必填)..."
        v-model="corporation.description">
      </el-input>
      <el-button class="mt20" type="primary" @click="createCorporation">新建社团</el-button>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('corporation-create'),
  data () {
    return {
      corporation: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    createCorporation () {
      this.$store.dispatch('corporation-create', {
        data: {
          name: this.corporation.name,
          description: this.corporation.description
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.$router.push({
            name: 'corporation-list'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.corporation-create {
}

.corporation-create__header {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}
</style>
<style lang="less">
.corporation-create {
  .el-textarea {
    textarea {
      min-height: 250px !important;
    }
  }
}
</style>
