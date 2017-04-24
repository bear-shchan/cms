<template>
  <div class="sidebar">
    <el-menu theme="dark" router :default-active="$route.path">
      <el-menu-item index="/">首页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.el-menu-item-group .el-menu-item-group__title{
  padding-top: 0;
}
.sidebar{
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 55px;
  bottom: 0;
  background: #2e363f;
  overflow-y: scroll;
  /*padding-right: 17px;*/
}
.sidebar::-webkit-scrollbar {width: 0px;}
.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{
  height: 50px;
  line-height: 50px;
}
</style>
