<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>概念回测</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header{
  margin-bottom: 20px;
}
.el-breadcrumb{
  background-color: #f5f5f5;
  line-height: 38px;
  margin-left: -20px;
  padding-left: 20px;
}
</style>
