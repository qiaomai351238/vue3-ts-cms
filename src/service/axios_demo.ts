import axios from 'axios'

axios.get('http://httpbin.org/get').then((res) => {
  console.log(res)
})

axios.defaults.baseURL = 'http://httpbin.org'

axios
  .get('/get', {
    params: {
      name: 'ces'
    }
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post('/post', {
    name: 'ceshi',
    lastName: 'hhh'
  })
  .then((res) => {
    console.log(res)
  })

axios.all([axios.get('/get'), axios.post('/post')]).then((res) => {
  console.log(res)
})

axios.interceptors.request.use(
  (config) => {
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
