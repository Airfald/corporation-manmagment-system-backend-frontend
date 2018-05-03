/*
 * 基于window.localStorage和sessionStorage服务插件
 * @Author: 欧贺福
 * @Date: 2018-04-10 16:56:23
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-05-01 14:44:48
 */

const $storage = {
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key))
    } else {
      console.log('操作的值不存在')
    }
  },
  remove (key) {
    if (window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key)
    } else {
      console.error('被操作的值不存在')
    }
  },
  clear () {
    window.localStorage.clear()
  }
}

export default {
  install (Vue) {
    Vue.prototype.$storage = $storage
  }
}
