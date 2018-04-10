const homeComponent = () => import('../../pages/home/index')

const homeRoutes = [{
  path: '/home',
  name: 'home',
  component: homeComponent
}]

export default homeRoutes
