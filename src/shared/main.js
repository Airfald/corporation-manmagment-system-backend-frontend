// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'shared@/pages/app'
import router from 'shared@/router'
import store from 'shared@/vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 插件服务
import storage from '@/libraries/storage'

Vue.use(ElementUI)
Vue.use(storage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
