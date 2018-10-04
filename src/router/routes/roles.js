export default [
  {
    path: '/roles',
    title: '权限管理',
    component: () => import('@/pages/roles/roles-table'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin'],
      title: '权限管理' // 路由title
    }
  }
]
