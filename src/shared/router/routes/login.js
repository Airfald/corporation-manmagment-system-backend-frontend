const loginComponent = () => import('../../pages/login/index')

const loginRoutes = [{
  path: '/login',
  name: 'login',
  component: loginComponent
}]

export default loginRoutes
