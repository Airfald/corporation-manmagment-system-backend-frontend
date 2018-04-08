<template>
  <el-aside>
    <el-menu
      class="app-sidebar"
      :router="false"
      text-color="#ffffff"
      background-color="#2B3C5A"
      active-text-color="#409eff">
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.key"
        @click="redirectPage(item.route)">
        <span slot="title">{{ item.name }}</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'app-sidebar',
  data () {
    return {
      li: 'ok',
      menuList: [{
        name: '首页',
        key: 'home',
        route: {
          name: 'home-page'
        }
      }, {
        name: '活动',
        key: 'activity',
        route: {
          name: 'activity-index'
        }
      }, {
        name: '留言',
        key: 'leaveMessage',
        route: {
          name: 'leave-message-index'
        }
      }]
    }
  },
  methods: {
    redirectPage (route) {
    }
  },
  created () {
    console.log(this.li)
  }
}
</script>

<style lang="less" scoped>
.app-sidebar {
  &.el-menu {
    width: 150px;
    border-right: none;
  }

  .el-menu-item,
  .el-submenu__title {
    position: relative;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
  }

  .el-icon-menu {
    margin-right: 0;
  }

  .el-menu-item-group__title {
    padding-top: 0;
    padding-bottom: 0;
  }

  .sidebar-menu-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 14px 14px;
    background-position: center center;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
}
</style>
