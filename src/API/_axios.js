// 使用拦截器
import axios from 'axios'
import { request_interceptor, request_error_interceptor, response_success_interceptor, response_error_interceptor } from './_interceptors'

axios.interceptors.request.use(request_interceptor, request_error_interceptor)
axios.interceptors.response.use(response_success_interceptor, response_error_interceptor)

export default axios
