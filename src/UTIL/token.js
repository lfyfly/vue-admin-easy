// token
export default {
  get () {
    return localStorage.getItem('token')
  },
  set (token) {
    return localStorage.setItem('token', token)
  },
  remove () {
    return localStorage.removeItem('token')
  }
}
