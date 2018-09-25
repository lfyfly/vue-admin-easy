// 权限验证路由
export default [
  {
    path: '/users',
    component: () => import('@/pages/users'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin']
    }
  }
]
