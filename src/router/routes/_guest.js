// 游客路由
export default [
  {
    path: '/login',
    component: () => import('@/pages/_guest/login'),
    meta: {
      layout: 'blank-layout'
    }
  }
]
