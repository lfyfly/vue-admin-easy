import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import users from './mock_data/users.json'
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
    let { page, pageSize, name, phone, email, address, status } = cfg.params
    let data = users.filter(v => {
      if (name && v.name.indexOf(name) === -1) return false
      if (phone && v.phone.indexOf(phone) === -1) return false
      if (email && v.email.indexOf(email) === -1) return false
      if (address && v.email.indexOf(address) === -1) return false
      if (status !== undefined && v.status !== parseInt(status)) return false
      return true
    })
    const total = data.length
    data = data.slice((page - 1) * pageSize, page * pageSize)
    if (token === '123456') {
      return [
        200,
        {
          total,
          data
        }
      ]
    } else {
      return [401, { type: 'error', message: '无权限访问' }]
    }
  })
  .onAny().passThrough() // 为匹配接口不拦截
