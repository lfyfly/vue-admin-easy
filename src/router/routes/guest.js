// 游客路由
export default [
  {
    path: '/login',
    component: () => import('@/pages/login'),
    meta: {
      layout: 'blank-layout'
    }
  },
  {
    path: '/404',
    component: () => import('@/pages/not-found'),
    meta: {
      layout: 'header-side-layout'
    }
  }
]
