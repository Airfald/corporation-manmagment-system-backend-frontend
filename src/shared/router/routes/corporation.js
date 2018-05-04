const corporationListComponent = () => import('../../pages/corporation/list')
const corporationDetailComponent = () => import('../../pages/corporation/detail')
const corporationCreateComponent = () => import('../../pages/corporation/create')

const corporationRoutes = [{
  path: '/corporation-list',
  name: 'corporation-list',
  component: corporationListComponent
}, {
  path: '/corporation-detail',
  name: 'corporation-detail',
  component: corporationDetailComponent
}, {
  path: '/corporation-create',
  name: 'corporation-create',
  component: corporationCreateComponent
}]

export default corporationRoutes
