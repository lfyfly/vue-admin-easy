// 登录用户通用路由
export default [
  {
    path: '/persnoal',
    component: () => import('@/pages/_users_common/persnoal'),
    meta: {
      layout: 'header-side-layout'
    }
  },
  {
    path: '/home',
    component: () => import('@/pages/_users_common/home'),
    meta: {
      layout: 'header-side-layout'
    }
  },
  { path: '/', redirect: '/home' },
  {
    path: '/401',
    component: () => import('@/pages/_users_common/unauthorized'),
    meta: {
      layout: 'header-side-layout'
    }
  },
  {
    path: '/404',
    component: () => import('@/pages/_users_common/not-found'),
    meta: {
      layout: 'header-side-layout'
    }
  }
]
