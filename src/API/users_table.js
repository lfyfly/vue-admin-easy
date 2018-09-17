
// users-table api

import _axios from './_axios'

const read_url = 'api/users/read'
const create_url = 'api/users/create'
const update_url = 'api/users/update'
const del_url = 'api/users/del'

export default {
  read (params) {
    return _axios.get(read_url, params)
  },
  create (params) {
    return _axios.post(create_url, params)
  },
  update (params) {
    return _axios.post(update_url, params)
  },
  del (params) {
    return _axios.post(del_url, params)
  }
}
