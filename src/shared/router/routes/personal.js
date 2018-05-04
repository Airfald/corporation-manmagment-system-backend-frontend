const personalComponent = () => import('../../pages/personal/index')

const personalRoutes = [{
  path: '/personal',
  name: 'personal',
  component: personalComponent
}]

export default personalRoutes
