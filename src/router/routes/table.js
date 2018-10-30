export default [
  {
    path: '/table',

    component: () => import('@/pages/table/table'),
    meta: {
      layout: 'header-side-layout',
      roles: ['admin'],
      title: '基础表格' // 路由title
    }
  }
]
