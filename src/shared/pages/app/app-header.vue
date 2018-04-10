<template>
  <el-menu
    mode="horizontal"
    background-color="#2b3c5a"
    active-text-color="#409eff"
    text-color="#ffffff">
      i商机
    <div><img src="../../assets/images/logo.jpg"></div>
    <el-dropdown trigger="click">
      <div>
        <img>
        <span class="user-name">{{ userInfo.name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="userLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
export default {
  name: 'app-sidebar',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
