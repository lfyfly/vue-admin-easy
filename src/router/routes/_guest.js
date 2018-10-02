// 游客路由
export default [
  {
    path: '/login',
    component: () => import('@/pages/_guest/login'),
    meta: {
      layout: 'blank-layout'
    }
  },
  {
    path: '/404',
    component: () => import('@/pages/_guest/not-found'),
    meta: {
      layout: 'header-side-layout'
    }
  }
]
