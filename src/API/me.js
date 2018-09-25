
import _axios from './_axios'

// 用户个人信息
const restful_url = '/api/me'

export default {
  read (params) {
    return _axios.get(restful_url, params)
  },
  create (params) {
    return _axios.post(restful_url, params)
  },
  update (params) {
    return _axios.put(restful_url, params)
  },
  delete (params) {
    return _axios.delete(restful_url, params)
  }
}
