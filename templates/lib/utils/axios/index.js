import axios from 'axios'
import qs from 'querystring'
import process from 'process'

const instance = axios.create({
  timeout: 10000,
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    let inigOptions = {}
    try {
      inigOptions = JSON.parse(process.env.inig_options)
    } catch (err) {
      inigOptions = {}
    }
    let d = JSON.parse(JSON.stringify(data))
    let date = (new Date()).getTime()
    if (d.hasOwnProperty('url')) {
      if (!d.data) {
        d.data = qs.stringify(Object.assign({
          t: date
        }, inigOptions || {}))
      } else {
        d.data = qs.stringify(Object.assign({
          t: date
        }, inigOptions || {}, d.data))
      }
    }
    return qs.stringify(d)
  }]
})

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let inigOptions = {}
  try {
    inigOptions = JSON.parse(process.env.inig_options)
  } catch (err) {
    inigOptions = {}
  }
  process.env.inig_options = JSON.stringify(inigOptions)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default instance
