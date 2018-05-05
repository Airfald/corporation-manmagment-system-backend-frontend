import Vue from 'vue'
import MxHttpService from '@/libraries/request'
import _config from 'shared@/config/request-define'

Vue.use(MxHttpService)

const requestsDefine = {}
const requestsConfig = _config['requests']

let accessToken = window.localStorage.getItem('accessToken')
console.log('tk ' + accessToken)

/**
 * 混合全局请求配置对象
 * @param {Object} context vuex 的 store 的复制对象
 * @param {Object} config httpServes 的配置对象
 */
function modifyRequestConfig (context, config) {
  console.log('ok')
  if (config === undefined || config === null) config = {}
  // 往 headers 中混合 accessToken
  config.headers = Object.assign({
    accessToken: accessToken
  }, config.headers || {})
  // config.headers = Object.assign({
  //   'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
  // }, config.headers || {})
  return config
}

/**
 * 注入请求配置
 * @param {Array} requestsArr 请求配置对象
 * @param {string} request.name 请求标识名
 * @param {string} request.config 请求事件配置对象
 */
function injectRequestsDefine (requests) {
  if (Array.isArray(requests)) {
    requests.forEach((request) => {
      if (request && request.name && request.config) {
        if (requestsDefine[request.name] === undefined) {
          requestsDefine[request.name] = (context, config) => {
            const requestConfig = Object.assign(request.config, config)
            return MxHttpService.request(modifyRequestConfig(context, requestConfig))
          }
        } else {
          console.warn('shared/lib/request', 'injectRequestsDefine 参数 requests 数组中对象已经被注入, request = ', request)
        }
      } else {
        console.warn('shared/lib/request', 'injectRequestsDefine 参数 requests 数组中对象不合法, request = ', request)
      }
    })
  } else {
    console.warn('shared/lib/request', 'injectRequestsDefine 参数 request 格式不正确, requests = ', requests)
  }
}

injectRequestsDefine(requestsConfig)

export default requestsDefine
