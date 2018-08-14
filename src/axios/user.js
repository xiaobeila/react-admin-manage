import fetch from './fetch'

/**
 * 用户列表
 * @param {*} query
 */
export function index (query) {
  return fetch({
    url: '/users/index',
    method: 'get',
    params: query
  })
}

/**
 * 用户添加
 * @param {*} query
 */
export function store (query) {
  return fetch({
    url: query.type === 'create' ? '/users/store' : '/users/edit',
    method: 'post',
    data: (query && query.data) || ''
  })
}