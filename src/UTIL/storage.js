// 对本地存储的数据统一封装
class Storage {
  // key 存储键值
  // type 存储类型  'localStorage' (默认) | 'sessionStorage'
  constructor (key, type) {
    this.key = key
    this.type = type || 'localStorage'
  }
  get () {
    try {
      return JSON.parse(window[this.type].getItem(this.key))
    } catch (err) {
      console.log(err)
      return window[this.type].getItem(this.key)
    }
  }
  set (data) {
    window[this.type].setItem(this.key, JSON.stringify(data))
  }
  remove () {
    window[this.type].remove(this.key)
  }
}
export default {
  skin: new Storage('skin')
}
