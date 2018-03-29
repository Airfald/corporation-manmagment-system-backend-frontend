/**
 * @description: vuex 配置文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'

Vue.use(Vuex)

// root
const wholeActions = Object.assign({}, actions)

const store = new Vuex.Store({
  state,
  mutations,
  actions: wholeActions,
  modules: {}
})

export default store
