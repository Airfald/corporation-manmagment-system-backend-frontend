<template>
  <div class="leave-message-list">
    <div class="leave-message-list__header">留言列表</div>
    <div class="leave-message-list__content clear">
      <el-collapse>
        <el-collapse-item
          v-for="(item, index) in leaveMessageList"
          :key="index"
          :title="item.title">
          <div>{{ item.content }}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('leave-message-list'),
  data () {
    return {
      leaveMessageList: []
    }
  },
  methods: {
    getLeaveMessageList () {
      this.$store.dispatch('leaveMessage-leaveMessageList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.leaveMessageList = []
          response.data.value.list.forEach((item, index) => {
            this.leaveMessageList.push({
              title: item.content.length > 10 ? (item.content.slice(0, 10) + '...') : item.content,
              content: item.content
            })
          })
        }
      })
    }
  },
  created () {
    this.getLeaveMessageList()
  }
}
</script>

<style lang="less" scoped>
.leave-message-list {
  border-radius: 10px;
  background-color: #ffffff;
}

.leave-message-list__header {
  padding: 10px;
  border-bottom: 1px solid #cccccc;
}

.leave-message-list__item {
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

  .delete-leave-message {
    position: absolute;
    top: -5px;
    right: 10px;
    width: 10px;
    height: 10px;
    font-size: 25px;
    font-weight: bold;
  }
}

.leave-message-list__item-name {
  font-size: 20px;
  color: #409EFF;
}

.leave-message-txt {
  padding-left: 15px;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    color: #666666;
    font-size: 14px;
  }
}
</style>
