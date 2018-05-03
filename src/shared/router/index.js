import Vue from 'vue'
import Router from 'vue-router'
import homeRoutes from './routes/home'
import activityRoutes from './routes/activity'
import announcementRoutes from './routes/announcement'
import corporationRoutes from './routes/corporation'
import manageRoutes from './routes/manage'
import loginRoutes from './routes/login'

Vue.use(Router)

const routes = Array.prototype.concat(homeRoutes, loginRoutes, activityRoutes, announcementRoutes, corporationRoutes, manageRoutes)

export default new Router({
  routes
})
