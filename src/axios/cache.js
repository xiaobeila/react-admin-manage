import Cookies from 'js-cookie'

// 登录token
const TokenKey = 'Admin-Token'

// 获取登录token
export function getToken () {
  return Cookies.get(TokenKey)
}

// 存入token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

// 删除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
