import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import API from '@/API'
import UTIL from '@/UTIL'
// routes
import { guest_routes, nav_routes, all_routes, nav_routes_config } from './routes_config'

Vue.use(Router)

const router = new Router({
  routes: all_routes
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
    let my_info
    try {
      my_info = (await API.me.read()).data.user_info
    } catch (err) {
      console.log(err)
      // token 失效
      UTIL.token.remove()
      if (to.path === '/login') return
      next('/login')
      return
    }

    store.commit('SET_MY_INFO', my_info)
    let nav_config = fliter_nav_routes_config(nav_routes_config, store.state.my_info.roles)
    store.commit('SET_NAV_CONFIG', nav_config)
  }

  // 已经获取用户信息
  if (store.state.my_info) {
    const roles = store.state.my_info.roles
    const match_route = nav_routes.filter(route => to.path === route.path)[0]
    if (match_route && match_route.meta.roles && UTIL.array_intersection(match_route.meta.roles, roles).length === 0) {
      console.log('无权限进入此页面')
      next('/401')
      return
    }
    // 进入路由不属于这个权限
  }
  next()
})

// 根据roles字段进行nav过滤
function fliter_nav_routes_config (config, roles) {
  return config.filter(group => {
    if (!group.roles || UTIL.array_intersection(group.roles, roles).length > 0) {
      group.routes = group.routes.filter(route => {
        if (!route.meta.roles) return true
        return UTIL.array_intersection(route.meta.roles, roles).length > 0
      })
      if (group.routes.length !== 0) return true
    }
  })
}

export default router
