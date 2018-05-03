const activityListComponent = () => import('../../pages/activity/list')
const activityDetailComponent = () => import('../../pages/activity/detail')

const activityRoutes = [{
  path: '/activity-list',
  name: 'activity-list',
  component: activityListComponent
}, {
  path: '/activity-detail',
  name: 'activity-detail',
  component: activityDetailComponent
}]

export default activityRoutes
