<template>
  <div class="login">
    <div class="login__panel">
      <h3 class="login__header">登陆界面</h3>
      <div class="login__form">
        <div>
          <span>学号</span>
          <el-input placeholder="请输入学号" v-model="studentInfo.number"></el-input>
        </div>
        <div class="mt15">
          <span>密码</span>
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="studentInfo.password"
            @keyup.native.enter="studentLogin"></el-input>
        </div>
        <el-alert
          v-if="errorMsg"
          type="error"
          :title="errorMsg">
        </el-alert>
        <div class="mt15">
          <el-button type="primary" @click.native="studentLogin">登陆</el-button>
          <div class="fr">
            <el-button type="text">忘记密码？</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('login'),
  data () {
    return {
      errorMsg: '',
      studentInfo: {
        number: '',
        password: ''
      }
    }
  },
  methods: {
    studentLogin () {
      let studentNumber = this.studentInfo.number.trim()
      let studentPassword = this.studentInfo.password.trim()
      if (studentNumber === '' || studentPassword === '') {
        this.errorMsg = '账号密码不能为空'
      } else {
        this.$store.dispatch('login', {
          data: {
            number: this.studentInfo.number,
            password: this.studentInfo.password
          }
        }).then(response => {
          if (response && response.data.errCode === 0) {
            this.$router.push({
              name: 'home'
            })
          } else {
            this.errorMsg = response.data.errMsg
          }
        })
      }
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.login__panel {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  // border: 1px solid #409EFF;
  border-radius: 5px;
  box-shadow: 0px -4px 2px #888;
}

.login__header {
  padding: 10px;
  text-align: center;
  color: #666;
  background-color: #409EFF;
}

.login__form {
  padding: 10px;
  background-color: #fff;
}
</style>
