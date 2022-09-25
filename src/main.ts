import { createApp } from 'vue'
import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
import qmRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

qmRequest
  .post<DataType>({
    url: '/home/multidata',
    showLoading: false
    // headers: {},
    // interceptors: {
    //   requestInterceptor: (config) => {
    //     console.log('单独请求的config')
    //     return config
    //   },
    //   responseInterceptor: (res) => {
    //     console.log('单独响应的response')
    //     return res
    //   }
    // }
  })
  .then((res) => {
    console.log(res)
  })

// createApp(App).mount('#app')
