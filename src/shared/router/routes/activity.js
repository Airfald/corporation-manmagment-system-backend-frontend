const activityListComponent = () => import('../../pages/activity/list')
const activityDetailComponent = () => import('../../pages/activity/detail')
const activityCreateComponent = () => import('../../pages/activity/create')

const activityRoutes = [{
  path: '/activity-list',
  name: 'activity-list',
  component: activityListComponent
}, {
  path: '/activity-create',
  name: 'activity-create',
  component: activityCreateComponent
}, {
  path: '/activity-detail/:activityId',
  name: 'activity-detail',
  component: activityDetailComponent,
  props: (route) => ({
    activityId: parseInt(route.params.activityId)
  })
}]

export default activityRoutes
