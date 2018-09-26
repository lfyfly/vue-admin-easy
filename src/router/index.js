import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import API from '@/API'
import UTIL from '@/UTIL'
// routes
import guest_routes from './routes/guest'
import role_routes from './routes/role'
import users_common_routes from './routes/users_common'
let routes = [...guest_routes, ...role_routes, ...users_common_routes].concat({ path: '*', redirect: '/404' })

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = UTIL.token.get()
  // 未登录
  if (!token && !guest_routes.some(route => route.path === to.path)) {
    next('/login')
    return
  }

  // 已经登录，未获取用户信息
  if (token && !store.state.my_info) {
    try {
      let my_info = (await API.me.read()).data.user_info
      store.commit('SET_MY_INFO', my_info)
    } catch (err) {
      // token 失效
      // UTIL.token.remove()
      // console.log(localStorage.token)
      if (to.path === '/login') return
      next('/login')
      return
    }
  }

  // 已经获取用户信息
  if (store.state.my_info) {
    const role = store.state.my_info.role
    const match_route = role_routes.filter(route => to.path === route.path)[0]

    if (match_route && match_route.meta.roles.indexOf(role) === -1) {
      alert('无权限进入此页面')
      next('/home')
      return
    }
    // 进入路由不属于这个权限
  }
  next()
})

export default router
