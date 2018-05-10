<template>
  <div class="student-create">
    <div class="student-create__header">添加学生</div>
    <div class="student-create__content mt20">
      <el-button type="primary" @click="createUser">新建</el-button>
      <el-input
        class="mt15"
        placeholder="请输入姓名"
        v-model="studentInfo.name">
        <template slot="prepend">姓名：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入学号"
        v-model="studentInfo.number">
        <template slot="prepend">学号：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入年级"
        v-model="studentInfo.grade">
        <template slot="prepend">年级：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入系别"
        v-model="studentInfo.department">
        <template slot="prepend">系别：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入班级"
        v-model="studentInfo.class">
        <template slot="prepend">班级：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入年龄"
        v-model="studentInfo.age">
        <template slot="prepend">年龄：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入密码"
        v-model="studentInfo.password"
        type="password">
        <template slot="prepend">密码：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入邮箱"
        v-model="studentInfo.email">
        <template slot="prepend">邮箱：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入电话"
        v-model="studentInfo.telphone">
        <template slot="prepend">电话：</template>
      </el-input>
      <div class="mt15">
        性别：
        <el-select v-model="studentInfo.sex" placeholder="">
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('student-create'),
  data () {
    return {
      studentInfo: {
        name: '',
        number: '',
        password: '',
        grade: '',
        class: '',
        sex: '',
        age: '',
        email: '',
        telphone: '',
        department: ''
      }
    }
  },
  methods: {
    createUser () {
      this.$store.dispatch('createUser', {
        data: {
          name: this.studentInfo.name,
          number: this.studentInfo.number,
          password: this.studentInfo.password,
          grade: this.studentInfo.grade,
          class: this.studentInfo.class,
          sex: this.studentInfo.sex,
          age: this.studentInfo.age,
          email: this.studentInfo.email,
          telphone: this.studentInfo.telphone,
          department: this.studentInfo.department
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '新建成功',
            type: 'success'
          })
          this.$router.push({
            name: 'student-list'
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.student-create {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.student-create__header {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}

.student-create__content {
  padding-right: 400px;
  box-sizing: border-box;
}

</style>
<style lang="less">
.student-create {
  .el-textarea {
    textarea {
      min-height: 250px !important;
    }
  }
}
</style>
