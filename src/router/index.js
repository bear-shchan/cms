import Vue from 'vue'
import Router from 'vue-router'

import nav from '../nav-config'

Vue.use(Router)

const getComponent = name => require(`@/views/${name}.vue`)

const routes = [
  {
    path: '/',
    name: '首页',
    component: require('@/views/Home')
  }
]

nav.forEach((mod) => {
  routes.push({
    path: mod.path,
    name: mod.name,
    component: getComponent(mod.component)
  })

  const subMenus = mod.children

  subMenus.forEach((subMenu) => {
    routes.push({
      path: mod.path + subMenu.path,
      name: subMenu.name,
      component: getComponent(subMenu.component)
    })
  })
})

export default new Router({
  routes
})
