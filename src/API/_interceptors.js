import UTIL from '@/UTIL'

export function request_interceptor (cfg) {
  let token = UTIL.token.get()
  if (token) cfg.headers.token = token
  // Do something before request is sent
  return cfg
}

export function request_error_interceptor (err) {
  // Do something with request error
  return Promise.reject(err)
}

export function response_success_interceptor (res) {
  return res
}

export function response_error_interceptor (err) {
  return Promise.reject(err)
}
