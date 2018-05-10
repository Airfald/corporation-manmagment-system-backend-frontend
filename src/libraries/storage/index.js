/*
 * 基于window.localStorage和sessionStorage服务插件
 * @Author: 欧贺福
 * @Date: 2018-04-10 16:56:23
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-05-05 21:59:40
 */

const $storage = {
  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    return JSON.parse(window.localStorage.getItem(key))
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
