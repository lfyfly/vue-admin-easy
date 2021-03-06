
import _axios from './_axios'

const restful_url = '/api/users'

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
