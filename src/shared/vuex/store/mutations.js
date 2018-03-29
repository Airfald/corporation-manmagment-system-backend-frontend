/**
 * @description: 根路径下的 mutations
 */

export default {
  // 改变用户信息
  changeUserInfo (state, data) {
    state.userInfo = {
      accessToken: data.accessToken,
      userId: data.userId,
      name: data.name
    }
  }
}
