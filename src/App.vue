<template>
  <div id="app" class="wrapper">
    <header-div></header-div>
    <nav-menu></nav-menu>
    <div id="content" class="content">
      <breadcrumb></breadcrumb>
      <router-view class="view" keep-alive></router-view>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import navMenu from './components/navMenu.vue'
import headerDiv from './components/headerDiv.vue'
import breadcrumb from './components/breadcrumb.vue'

export default {
  name: 'app',
  components: {
    headerDiv,
    breadcrumb,
    navMenu
  },
  watch: {
    '$route': function () {
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>
@import './assets/css/reset.css';

.wrapper{
  width: 100%;
  height: 100%;
}
.content{
  background: none repeat scroll 0 0 #f5f5f5;
  position: absolute;
  left: 200px;
  right: 0;
  top: 55px;
  bottom: 0;
  width: auto;
  padding: 0px 15px 10px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.view{
  background-color: #fff;
  padding: 10px;
}
</style>
