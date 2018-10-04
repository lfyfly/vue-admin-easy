// 侧边栏所有导航分组配置，最终会根据用户权限进行过滤
// 过滤顺序
// 组权限过滤 > 组内路由权限过滤
import guest_routes from './routes/_guest'
import users_common_routes from './routes/_users_common'
import users_routes from './routes/users'
import roles_routes from './routes/roles'

// '_guest' 和 '_users' 为固定字段代表游客路由和所有用户通用路由
const nav_routes_config = [

  // 拥有title字段将会被分组，且会被过滤到
  {
    title: '用户管理',
    // icon: 'el-icon-menu',
    roles: ['admin'],
    routes: users_routes
  },
  {
    title: '权限管理',
    // icon: 'el-icon-menu',
    roles: ['admin'],
    // 当 routes数组仅有一个路由时则判定为 单独路由
    routes: roles_routes
  }
]
const nav_routes = nav_routes_config.reduce((a, b) => {
  // 过滤掉 分组中的游客路由 和 用户通用路由
  return a.concat(b.routes)
}, [])

const all_routes = [...guest_routes, ...users_common_routes, ...nav_routes, { path: '*', redirect: '/404' }]

// 也可由过滤出对应角色的专属路由
// teacher_routes
// student_routes

// TODO 两种实现权限方法
//   1 动态添加路由
// √ 2 全路由初始化，beforeEach钩子中对权限进行判断

export { guest_routes, users_common_routes, nav_routes, all_routes, nav_routes_config }
