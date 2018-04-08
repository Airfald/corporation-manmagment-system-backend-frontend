<template>
  <el-container id="app">
    <!-- 侧边栏 -->
    <app-sidebar></app-sidebar>
    <router-view/>
  </el-container>
</template>

<script>
import AppSidebar from './app-sidebar'
export default {
  name: 'App',
  components: {
    AppSidebar
  }
}
</script>

<style>
/* 引入css重置样式文件 */
@import '../../assets/style/reset.less';
/* 引入css辅助样式文件 */
@import '../../assets/style/helper.less';
/* 引入css全局样式文件 */
@import '../../assets/style/global.less';
/* 引入css风格样式文件 */
@import '../../assets/style/theme.less';

#app {
  min-width: 900px;
  height: 100%;
  background-color: #f3f3f3;
}
</style>
