import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios, { delayResponse: 100 })

mock
  .onPost('/api/login').reply(cfg => {
    let { email, password } = JSON.parse(cfg.data)
    if (email === 'lfy@qq.com' && password === '111111') {
      return [200, { type: 'success', token: '123456' }]
    } else {
      return [200, { type: 'error', message: '用户名或者密码输入错误' }]
    }
  })
  .onGet('/api/me').reply(cfg => {
    // axios config
    let token = cfg.headers.token
    if (token === '123456') {
      return [200, { user_info: { username: 'lfy', roles: ['admin'] } }]
    } else {
      return [401, { type: 'error', message: 'token失效' }]
    }
  })
  .onGet('/api/users').reply(cfg => {
    // axios config
    let token = cfg.headers.token
    if (token === '123456') {
      return [
        200,
        {
          users: [
            { name: 'aaa', role: 'admin' },
            { name: 'bbb', role: 'admin' },
            { name: 'ccc', role: 'admin' }
          ]
        }
      ]
    } else {
      return [401, { type: 'error', message: '无权限访问' }]
    }
  })
  .onAny().passThrough() // 为匹配接口不拦截
