const nav = [
  {
    name: 'app管理',
    // component: 'RouterView',
    path: '/app',
    children: [
      {
        name: '热门搜索',
        component: 'HotSearch',
        path: 'hotSearch'
      }
    ]
  },
  {
    name: '表单',
    path: '/form',
    children: [
      {
        name: '基础表单',
        component: 'Baseform',
        path: 'baseform'
      }
    ]
  }
]

export default nav
