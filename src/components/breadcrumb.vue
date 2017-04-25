<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.matched[0].name != '首页'">{{$route.matched[0].name}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header{
  margin-bottom: 10px;
}
.el-breadcrumb{
  background-color: #fff;
  line-height: 38px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
}
</style>
