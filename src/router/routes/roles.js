export default [
  {
    path: '/roles',
    component: () => import('@/pages/roles/roles-table'),
    meta: {
      layout: 'header-side-layout',
      roles: ['root'],
      title: '用户管理' // 路由title
    }
  }
]
