const corporationListComponent = () => import('../../pages/corporation/list')
const corporationDetailComponent = () => import('../../pages/corporation/detail')

const corporationRoutes = [{
  path: '/corporation-list',
  name: 'corporation-list',
  component: corporationListComponent
}, {
  path: '/corporation-detail',
  name: 'corporation-detail',
  component: corporationDetailComponent
}]

export default corporationRoutes
