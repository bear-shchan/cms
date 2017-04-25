import Vue from 'vue'
import Router from 'vue-router'

import nav from '../nav-config'

Vue.use(Router)

const getComponent = name => require(`@/views/${name}.vue`)

let routes = [
  {
    path: '/',
    name: '首页',
    component: require('@/views/Home')
  }
]

nav.forEach((mod) => {
  let subMenus = mod.children

  let children = subMenus.map((subMenu) => {
    return {
      path: subMenu.path,
      name: subMenu.name,
      meta: {
        parentName: mod.name
      },
      component: getComponent(subMenu.component)
    }
  })

  routes.push({
    path: mod.path,
    name: mod.name,
    component: mod.component ? getComponent(mod.component) : getComponent('RouterView'),
    children: children
  })
})

console.log(routes)

export default new Router({
  routes
})
