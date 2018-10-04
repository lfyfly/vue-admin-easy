// 用户管理组下的路由
export default [
  {
    path: '/users/list',
    component: () => import('@/pages/users/users-table'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin'],
      title: '用户管理' // 路由title
    }
  },
  {
    path: '/users/create',
    component: () => import('@/pages/users/users-edit'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin'],
      title: '用户编辑' // 路由title
    }
  },
  {
    path: '/users/update',
    component: () => import('@/pages/users/users-edit'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin'],
      title: '用户更新' // 路由title
    }
  }
  // 游客路由 和 用户路由都会被注册，当要被分到目录组中，只需要 路由地址和显示字段
  // 游客路由会被优先匹配，给路由只做展示用而已
  // {
  //   path: '/persnoal',
  //   meta: {
  //     title: '个人中心'
  //   }
  // }
]
