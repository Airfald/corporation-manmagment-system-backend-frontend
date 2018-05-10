const statisticsAnalysisComponent = () => import('../../pages/manage/statistics-analysis')
const studentListComponent = () => import('../../pages/manage/studentList')
const studentCreateComponent = () => import('../../pages/manage/studentCreate')
const leaveMessageListComponent = () => import('../../pages/manage/leaveMessageList')
const manageCorporationComponent = () => import('../../pages/manage/manageCorporation')
const manageActivityComponent = () => import('../../pages/manage/manageActivity')

const statisticsRoutes = [{
  path: '/statistics-analysis',
  name: 'statistics-analysis',
  component: statisticsAnalysisComponent
}, {
  path: '/student-list',
  name: 'student-list',
  component: studentListComponent
}, {
  path: '/student-create',
  name: 'student-create',
  component: studentCreateComponent
}, {
  path: '/manage-leave-message-list',
  name: 'manage-leave-message-list',
  component: leaveMessageListComponent
}, {
  path: '/manage-activity',
  name: 'manage-activity',
  component: manageActivityComponent
}, {
  path: '/manage-corporation',
  name: 'manage-corporation',
  component: manageCorporationComponent
}]

export default statisticsRoutes
