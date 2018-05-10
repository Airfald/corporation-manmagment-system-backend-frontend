const homeComponent = () => import('../../pages/home/index')

const homeRoutes = [{
  path: '/home',
  name: 'home',
  component: homeComponent
}, {
  path: '/',
  redirect: '/home'
}]

export default homeRoutes
