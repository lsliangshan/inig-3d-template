import { APIS } from '../../constants/user'
import { doGet } from '../base'

/**
 * 获取推荐职位
 * @param {*} args 
 */
export function login (args) {
  return doGet(args, 'login', APIS)
}