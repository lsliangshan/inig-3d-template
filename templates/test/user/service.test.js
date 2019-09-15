import { INIG } from '../../index'
const User = require('../../lib/domains/user/service')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

// const DEFAULT_CONFIG = {
//   username: 'zues',
//   password: '123123'
// }
INIG({
  options: {
    platform: 13, // 必填
    pagecode: 4020, // 必填
    appid: 'A23'
  },
  isServer: false,
  isTest: true
})

/**
 * 推荐职位
 */
describe('登录 - login', function () {
  it('1. 空参数', () => {
    return User.login().then(() => {
      assert(false)
    }).catch(err => {
      expect(err.message).to.be.equal('用户名密码不能为空')
    })
  })
})
