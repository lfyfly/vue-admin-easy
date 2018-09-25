// 登录用户通用路由
export default [
  {
    path: '/home',
    component: () => import('@/pages/home'),
    meta: {
      layout: 'header-side-layout'
    }
  }
]
