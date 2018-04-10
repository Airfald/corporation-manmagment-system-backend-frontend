<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator=">">
      <div class="el-breadcrumb-head">您的位置：</div>
      <el-breadcrumb-item>
        首页
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 其它部分 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb-wrap',
  props: {
  }
}
</script>

<style>
  .el-breadcrumb {
    height: 20px;
    padding: 8px 10px;
    font-size: 12px;
    line-height: 20px;
    color: #5a5e66;
  }

  .el-breadcrumb-head {
    float: left;
    margin-right: 10px;
  }

  .el-breadcrumb__separator {
    font-weight: 400;
  }
</style>
