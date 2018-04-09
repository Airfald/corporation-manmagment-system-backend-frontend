<template>
  <el-container id="app">
    <!-- 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal -->
    <!-- 头部 -->
    <el-header>
      <app-header id="app-header"></app-header>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <app-sidebar id="app-sidebar"></app-sidebar>
      </el-aside>
      <!-- 内容部分 -->
      <el-main>
        <app-breadcrumb></app-breadcrumb>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppSidebar from './app-sidebar'
import AppHeader from './app-header'
import AppBreadcrumb from './app-breadcrumb'
export default {
  name: 'App',
  components: {
    AppSidebar,
    AppHeader,
    AppBreadcrumb
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
