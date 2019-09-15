import * as User from '../../apis/user'
import { isEmpty } from '../../utils'

/**
 * 登录
 * @param {*} args
 * @return Promise
 */
export function login (args) {
  if (isEmpty(args)) {
    return Promise.reject(new Error('用户名密码不能为空'))
  } else {
    return User.login(args)
  }
}
