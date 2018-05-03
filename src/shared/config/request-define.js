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
  }
]

/*eslint-disable*/
export default config
