import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface QMRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface QMRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: QMRequestInterceptors<T>
  showLoading?: boolean
}
