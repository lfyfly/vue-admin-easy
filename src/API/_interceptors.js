export default {
  request_interceptor (cfg) {
    // Do something before request is sent
    return cfg
  },
  request_error_interceptor (err) {
    // Do something with request error
    return Promise.reject(err)
  },
  response_success_interceptor (res) {
    return res
  },
  response_error_interceptor (err) {
    return Promise.reject(err)
  }

}
