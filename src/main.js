// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach(({path}, from, next) => {
  let content = document.getElementById('content')
  if (content) {
    content.scrollTop = 0
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
