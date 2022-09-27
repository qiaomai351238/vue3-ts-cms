import QMRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const qmRequest = new QMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('单个实例请求成功')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      // console.log('单个实例响应成功')
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default qmRequest
