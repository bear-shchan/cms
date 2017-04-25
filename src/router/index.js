import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: function (resolve) {
        require(['@/views/Home'], resolve)
      }
    },
    {
      path: '/adminApp',
      name: 'app管理',
      component: function (resolve) {
        require(['@/views/Navigation.vue'], resolve)
      },
      children: [
        {
          path: 'hotSearch',
          name: '热门搜索',
          component: function (resolve) {
            require(['@/views/HotSearch'], resolve)
          }
        }
      ]
    }
  ]
})
