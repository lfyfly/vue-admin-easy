export default [
  {
    path: '/roles',
    component: () => import('@/pages/roles/roles-table'),
    meta: {
      layout: 'header-side-layout',
      roles: ['root'],
      title: '权限管理' // 路由title
    }
  }
]
