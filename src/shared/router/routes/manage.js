const statisticsAnalysisComponent = () => import('../../pages/manage/statistics-analysis')
const studentListComponent = () => import('../../pages/manage/studentList')
const studentCreateComponent = () => import('../../pages/manage/studentCreate')
const leaveMessageListComponent = () => import('../../pages/manage/leaveMessageList')

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
}]

export default statisticsRoutes
