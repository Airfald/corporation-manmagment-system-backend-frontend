<template>
  <el-menu
    mode="horizontal"
    background-color="#2b3c5a"
    active-text-color="#409eff"
    text-color="#ffffff">
    <div class="header-logo">
      <img src="../../assets/images/logo.png">
      <span class="logo-txt">湖南人文科技学院社团管理系统</span>
    </div>
    <el-dropdown
      trigger="click"
      class="header-user-area">
      <div>
        <img>
        <span class="user-name">{{ userName }}</span>
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
      userName: ''
    }
  },
  methods: {
    userLogout () {
      this.$storage.set('accessToken', null)
      this.$router.push({
        name: 'login'
      })
    }
  },
  created () {
    this.userName = this.$storage.get('userInfo').name
  }
}
</script>

<style lang="less" scoped>
.header-logo {
  float: left;
  display: flex;
  margin-left: 20px;
  cursor: default;
  outline: none;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
}

.logo-txt {
  line-height: 50px;
  font-size: 20px;
  font-family: '宋体';
  color: #ffffff;
}

.header-user-area {
  float: right;
  margin-right: 20px;
  line-height: 50px;
  cursor: pointer;
  color: #fff;
}
</style>
