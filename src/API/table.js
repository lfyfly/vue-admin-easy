
import axios from 'axios'

const TABLE_RESTFUL_URL = '/api/users'

const STATUS_MAP = [
  { value: 0, text: '禁用', btnText: '启用' },
  { value: 1, text: '启用', btnText: '禁用' }
]

export default {
  STATUS_MAP,
  read (params) {
    return axios.get(TABLE_RESTFUL_URL, { params }).then(res => {
      console.log(res.data)

      res.data.data.forEach(item => {
        // 对字段进行转换,以新的字段进行添加
        let statusMap = STATUS_MAP.filter(mapItem => {
          return mapItem.value === item.status
        })[0]
        item._statusText = statusMap.text
        item._statusBtnText = statusMap.btnText
      })
      return res
    })
  },
  create (params) {
    return axios.post(TABLE_RESTFUL_URL, params)
  },
  update (params) {
    return axios.put(TABLE_RESTFUL_URL, params)
  }
}
