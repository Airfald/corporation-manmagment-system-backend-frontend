/*eslint-disable*/
/**
 * 总配置项
 */
const config = {
  // 配置测试用户账号
  testUserData: {
    accessToken: 'T2550087601079296',
    userId: 'zhangxm',
    name: '张小明'
  }
}

// 获取当前环境的的 serverHost
// process.env.VUE_APP_MX_ENV 在package.json 中初始化，对应环境配置项的环境对象
const serverHost = 'http://localhost:3000'

/**
 * 请求配置项
 * @param name 调用请求的名称
 * @param config 请求配置
 * @param config.url 请求的url
 * @param config.method 请求方法
 * [如何新增请求]：添加对象，设置对应的name、config属性
 */
config.requests = [
  /*
  * 请求接口配置示范，实际开发中请将下面两个接口去除
  */
  {
    name: 'login',
    config: {
      url: serverHost + '/login',
      method: 'post'
    }
  },
  {
    name: 'activity-view',
    config: {
      url: serverHost + '/activity/view',
      method: 'get'
    }
  },
  {
    name: 'corporation-create',
    config: {
      url: serverHost + '/corporation/create',
      method: 'post'
    }
  },
  {
    name: 'corporation-corporationList',
    config: {
      url: serverHost + '/corporation/corporationList',
      method: 'get'
    }
  },
  {
    name: 'activity-activityList',
    config: {
      url: serverHost + '/activity/activityList',
      method: 'get'
    }
  },
  {
    name: 'activity-create',
    config: {
      url: serverHost + '/activity/create',
      method: 'post'
    }
  },
  {
    name: 'leaveMessage-create',
    config: {
      url: serverHost + '/leaveMessage/create',
      method: 'post'
    }
  },
  {
    name: 'updatedUser',
    config: {
      url: serverHost + '/updatedUser',
      method: 'post'
    }
  },
  {
    name: 'viewUser',
    config: {
      url: serverHost + '/viewUser',
      method: 'get'
    }
  },
  {
    name: 'getUserList',
    config: {
      url: serverHost + '/getUserList',
      method: 'get'
    }
  },
  {
    name: 'createUser',
    config: {
      url: serverHost + '/createUser',
      method: 'post'
    }
  },
  {
    name: 'deleteUser',
    config: {
      url: serverHost + '/deleteUser',
      method: 'get'
    }
  },
  {
    name: 'corporation-view',
    config: {
      url: serverHost + '/corporation/view',
      method: 'get'
    }
  },
  {
    name: 'activity-deleteActivity',
    config: {
      url: serverHost + '/activity/deleteActivity',
      method: 'get'
    }
  },
  {
    name: 'corporation-deleteCorporation',
    config: {
      url: serverHost + '/corporation/deleteCorporation',
      method: 'get'
    }
  },
  {
    name: 'leaveMessage-leaveMessageList',
    config: {
      url: serverHost + '/leaveMessage/leaveMessageList',
      method: 'get'
    }
  }
]

/*eslint-disable*/
export default config
