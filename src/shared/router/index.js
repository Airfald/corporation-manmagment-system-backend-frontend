import Vue from 'vue'
import Router from 'vue-router'
import homeRoutes from './routes/home'
import activityRoutes from './routes/activity'
import leaveMessageRoutes from './routes/leaveMessage'
import corporationRoutes from './routes/corporation'
import manageRoutes from './routes/manage'
import loginRoutes from './routes/login'
import personalRoutes from './routes/personal'

Vue.use(Router)

const routes = Array.prototype.concat(homeRoutes, loginRoutes, activityRoutes, leaveMessageRoutes, corporationRoutes, personalRoutes, manageRoutes)

export default new Router({
  routes
})
