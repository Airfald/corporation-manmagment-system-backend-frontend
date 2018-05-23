<template>
  <div class="corporation-detail">
    <div class="corporation-detail__header">{{ name }}</div>
      <div class="corporation-detail__content">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="社团简介" name="1">
            <div>{{ description }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="mt15" v-if="examine"><el-button type="primary" @click="joinCorportation">赶紧加入我们吧！</el-button></div>
      <div class="mt15" v-if="!examine"><el-button type="primary" @click="examineCorporation">审批通过</el-button></div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('corporation-detail'),
  props: {
    corporationId: {
      type: Number
    }
  },
  data () {
    return {
      studentId: '',
      activeNames: ['1'],
      name: '',
      description: '',
      isAdmin: 0,
      examine: false
    }
  },
  methods: {
    jumpDetail (row) {
      this.$router.push({
        name: 'corporation-detail'
      })
    },
    joinCorportation () {
      this.$store.dispatch('corporation-join', {
        data: {
          studentId: this.studentId,
          corporationId: this.corporationId
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '加入成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: response.data.errMsg,
            type: 'error'
          })
        }
      })
    },
    getCorporationDetail (id) {
      this.$store.dispatch('corporation-view', {
        params: {
          id: id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.name = response.data.value.name
          this.description = response.data.value.description
          this.examine = response.data.value.examine
        }
      })
    },
    examineCorporation (id) {
      this.$store.dispatch('corporation-update', {
        data: {
          id: this.corporationId,
          examine: true
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.getCorporationDetail(this.corporationId)
        }
      })
    }
  },
  created () {
    this.getCorporationDetail(this.corporationId)
    this.studentId = this.$storage.get('userInfo').id
    this.isAdmin = this.$storage.get('userInfo').isAdmin
  }
}
</script>

<style lang="less" scoped>
.corporation-detail {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}

.corporation-detail__header {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
</style>
