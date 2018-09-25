// 游客路由
export default [
  {
    path: '/login',
    component: () => import('@/pages/login'),
    meta: {
      layout: 'blank-layout'
    }
  }
]
