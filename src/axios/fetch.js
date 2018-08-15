import axios from 'axios'
import { Modal } from 'antd'
import { getToken } from './cache'
import * as error from './config'
import Qs from 'qs'

let loading;
loading = document.getElementById('ajaxLoading');
loading.style.display = 'block';

let BASE_API = 'http://localhost:3000/';

// 创建axios实例
const service = axios.create({
  baseURL: BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.method === 'post' && typeof config.data !== 'string') {
    config.data = Qs.stringify(config.data)
  }
  // Do something before request is sent
  let token = getToken()
  if (token) {
    config.headers['TOKEN'] = token
  }

  config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  // config.headers['Content-Type'] = 'multipart/form-data'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
  response => {
    // token
    if (response.status !== 200) {
      Modal.error({
        title: "提示",
        content: response.message
      })
    }
    let res = response.data
    loading = document.getElementById('ajaxLoading');
    loading.style.display = 'none';
    if (res.status === error.ERROR_TOKEN_EXPIRE || res.status === error.ERROR_TOKEN_ILLEGAL) {
      Modal.error({
        title: "提示",
        content: '你已被登出，可以取消继续留在该页面，或者重新登录'
      }).then(() => {
        // routes.push({ name: 'login' })
      })
    } else if (res.status === error.ERROR_AUTHORITY) { // 权限
      // routes.push({ name: '401' })
    }
    return Promise.resolve(res)
  }, error => {
    console.log('err' + error)// for debug
    Modal.error({
      title: "提示",
      content: error.message
    })
    return Promise.reject(error)
  }
)

export default service
