<template>
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
      <span slot="title"><i :class="'sidebar-menu-icon ' + item.key"></i>{{ item.name }}</span>
    </el-menu-item>
    <!-- 后台管理界面 -->
    <el-submenu index="management">
      <template slot="title"><i class="sidebar-menu-icon management"></i>后台管理</template>
      <el-menu-item
        v-for="(item, index) in managmentList"
        :key="index"
        :index="item.key"
        @click="redirectPage(item.route)">{{ item.name }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'app-sidebar',
  data () {
    return {
      menuList: [{
        name: '首页',
        key: 'home',
        route: {
          name: 'home'
        }
      }, {
        name: '社团',
        key: 'corporation',
        route: {
          name: 'corporation-list'
        }
      }, {
        name: '活动',
        key: 'activity',
        route: {
          name: 'activity-list'
        }
      }, {
        name: '我要留言',
        key: 'announcement',
        route: {
          name: 'leave-message-list'
        }
      }, {
        name: '个人中心',
        key: 'preview',
        route: {
          name: 'personal'
        }
      }],
      managmentList: [{
        name: '数据统计与分析',
        key: 'statistics-analysis',
        route: {
          name: 'statistics-analysis'
        }
      }, {
        name: '学生管理',
        key: 'student-list',
        route: {
          name: 'student-list'
        }
      }, {
        name: '留言列表',
        key: 'manage-leave-message-list',
        route: {
          name: 'manage-leave-message-list'
        }
      }]
    }
  },
  methods: {
    // 跳转到相应的路由页面
    redirectPage (route) {
      this.$router.push({
        name: route.name
      })
    }
  }
}
</script>

<style lang="less">
.app-sidebar {
  width: 150px !important;
  height: 100%;
  overflow: auto;

  &.el-menu {
    border-right: none;
  }

  .el-menu-item,
  .el-submenu__title {
    position: relative;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
  }

  .el-submenu__title {
    font-size: 12px;
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
    width: 16px;
    height: 16px;
    margin-right: 7px;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    vertical-align: middle;

    &.home {
      background-image: url("../../assets/icon/home.svg");
    }
    &.corporation {
      width: 20px;
      height: 20px;
      background-image: url("../../assets/icon/corporation.svg");
    }
    &.activity {
      background-image: url("../../assets/icon/activity.svg");
    }
    &.announcement {
      background-image: url("../../assets/icon/announcement.svg");
    }
    &.preview {
      background-image: url("../../assets/icon/preview.svg");
    }
    &.management {
      background-image: url("../../assets/icon/management.svg");
    }
  }
}
</style>
