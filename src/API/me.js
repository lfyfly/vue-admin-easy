
import _axios from './_axios'

// 用户个人信息
const restful_url = '/api/me'
const login_url = '/api/login'

export default {
  read (params) {
    return _axios.get(restful_url, params)
  },
  update (params) {
    return _axios.put(restful_url, params)
  },
  login (params) {
    return _axios.post(login_url, params)
  }
}
