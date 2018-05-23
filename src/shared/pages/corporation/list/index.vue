<template>
  <div class="corporation-list">
    <div class="corporation-list__header">社团列表</div>
    <div class="corporation-list__content clear">
    <div class="like-corporation">
      选择你最喜欢的社团：
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="(item, index) in corporationList"
          :key="index"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-button type="primary" size="small" @click="submit">提交</el-button>
    </div>
    <div class="mt15">
      <el-button v-if="isAdmin" type="primary" size="small" @click="createdCorporation">新建社团</el-button>
    </div>
      <div
        class="corporation-list__item"
        v-for="(item, index) in corporationList"
        :key="index"
        v-if="item.examine || (isAdmin === 2)"
        @click="jumpDetail(item.id)">
        <div><img width="100%" height="100%" src="../../../assets/images/corporation.jpg"></div>
        <div class="corporation-txt">
          <h4 class="corporation-list__item-name">{{ item.name }}<span v-if="!item.examine">未审批</span></h4>
          <p>欢迎加入我们协会</p>
        </div>
        <span v-if="isAdmin" class="delete-corporation" @click.stop="deleteCorporation(item.id)">x</span>
      </div>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('corporation-list'),
  data () {
    return {
      corporationList: [],
      options: [],
      value: '',
      isAdmin: false,
      studentId: '',
      corporationId: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('updatedUser', {
        data: {
          id: this.studentId,
          corporationId: this.value
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.getViewUser()
        }
      })
    },
    jumpDetail (id) {
      this.$router.push({
        name: 'corporation-detail',
        params: {
          corporationId: id
        }
      })
    },
    createdCorporation () {
      this.$router.push({
        name: 'corporation-create'
      })
    },
    deleteCorporation (id) {
      this.$store.dispatch('corporation-deleteCorporation', {
        params: {
          id: id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getCorporationList()
        }
      })
    },
    getCorporationList () {
      this.$store.dispatch('corporation-corporationList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.corporationList = []
          response.data.value.list.forEach(item => {
            this.corporationList.push({
              id: item.id,
              name: item.name,
              examine: item.examine
            })
          })
        }
      })
    },
    getViewUser () {
      this.$store.dispatch('viewUser', {
        params: {
          id: this.studentId
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$storage.set('userInfo', response.data.value)
        }
      })
    }
  },
  created () {
    this.getCorporationList()
    this.isAdmin = this.$storage.get('userInfo').isAdmin
    this.studentId = this.$storage.get('userInfo').id
    this.corportationId = this.$storage.get('userInfo').corporationId
  }
}
</script>

<style lang="less" scoped>
.corporation-list {
  border-radius: 10px;
  background-color: #ffffff;
}

.corporation-list__header {
  padding: 10px;
  border-bottom: 1px solid #cccccc;
}

.corporation-list__item {
  position: relative;
  float: left;
  width: 25%;
  padding-top: 15px;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;

  img {
  vertical-align: middle;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }

  .delete-corporation {
    position: absolute;
    top: -5px;
    right: 10px;
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
  }
}

.corporation-list__item-name {
  font-size: 20px;
  color: #409EFF;

  span {
    color: red;
  }
}

.corporation-txt {
  padding-left: 15px;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    color: #666666;
    font-size: 14px;
  }
}

.like-corporation {
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #ccc;
}
</style>
