const statisticsAnalysisComponent = () => import('../../pages/manage/statistics-analysis')
const studentListComponent = () => import('../../pages/manage/studentList')
const studentCreateComponent = () => import('../../pages/manage/studentCreate')

const statisticsRoutes = [{
  path: '/statistics-analysis',
  name: 'statistics-analysis',
  component: statisticsAnalysisComponent
}, {
  path: '/student-list',
  name: 'student-list',
  component: studentListComponent
}, {
  path: '/student-detail',
  name: 'student-detail',
  component: studentCreateComponent
}]

export default statisticsRoutes
