/**
 * @description: vuex 配置文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'
import requestsDefine from 'shared@/http/services'

Vue.use(Vuex)

// root vuex
const wholeActions = Object.assign(actions, requestsDefine)

const store = new Vuex.Store({
  state,
  mutations,
  actions: wholeActions,
  modules: {}
})

export default store
