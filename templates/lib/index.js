import process from 'process'

export function INIG (options) {
  if (options.isTest) {
    process.env.inig_isServer = 'false'
    process.env.inig_isTest = 'true'
  } else {
    if (options.isServer) {
      /**
       * 服务端渲染
       */
      process.env.inig_cookies = JSON.stringify(options.ctx.request.cookies.all())
    }
    process.env.inig_isServer = JSON.stringify(options.isServer)
    process.env.inig_isTest = 'false'
  }
  process.env.inig_options = JSON.stringify(options.options)
}
