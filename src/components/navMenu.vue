<template>
  <div class="sidebar">
    <el-menu theme="dark" router :default-active="$route.path">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu
        :index="menu.name"
        v-for="(menu, index) in menus"
        key="menu.name">
        <template slot="title">{{menu.name}}</template>
        <el-menu-item 
          :index="menu.path + '/' + subMenu.path"
          v-for="(subMenu, subIndex) in menu.children"
          key="subMenu.name">
            {{subMenu.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menus from '../nav-config'

export default {
  data () {
    return {
      menus
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
