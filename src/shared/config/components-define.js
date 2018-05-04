/*
 * 统一使用组件名进行组件的管理
 * @Author: 欧贺福
 * @Date: 2018-04-10 17:24:46
 * @Last Modified by: 欧贺福
 * @Last Modified time: 2018-05-04 20:01:47
 */

const COMPONENTS_DEFINE = {}

// app
COMPONENTS_DEFINE['app'] = 'app'
COMPONENTS_DEFINE['app-header'] = 'app-header'
COMPONENTS_DEFINE['app-sidebar'] = 'app-sidebar'
COMPONENTS_DEFINE['app-breadcrumb'] = 'app-breadcrumb'
COMPONENTS_DEFINE['app-footer'] = 'app-footer'

// home
COMPONENTS_DEFINE['home'] = 'home'
// login
COMPONENTS_DEFINE['login'] = 'login'
// activity
COMPONENTS_DEFINE['activity-list'] = 'activity-list'
COMPONENTS_DEFINE['activity-detail'] = 'activity-detail'
// corporation
COMPONENTS_DEFINE['corporation-list'] = 'corporation-list'
COMPONENTS_DEFINE['corporation-detail'] = 'corporation-detail'
// leaveMessage
COMPONENTS_DEFINE['leave-message-list'] = 'leave-message-list'
// personal
COMPONENTS_DEFINE['personal'] = 'personal'
// echart
COMPONENTS_DEFINE['activity-rank'] = 'activity-rank'
COMPONENTS_DEFINE['corporation-number'] = 'corporation-number'
COMPONENTS_DEFINE['statistics-analysis'] = 'statistics-analysis'
COMPONENTS_DEFINE['student-detail'] = 'student-detail'

function getComponentName (key) {
  if (key in COMPONENTS_DEFINE) {
    return COMPONENTS_DEFINE[key]
  }
  console.error('COMPONENTS_DEFINE', key, '该组件名称未定义')
  return ''
}

export default getComponentName
