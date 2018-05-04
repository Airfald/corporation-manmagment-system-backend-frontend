const leaveMessageListComponent = () => import('../../pages/leaveMessage/list')

const leaveMessageRoutes = [{
  path: '/leave-message-list',
  name: 'leave-message-list',
  component: leaveMessageListComponent
}]

export default leaveMessageRoutes
