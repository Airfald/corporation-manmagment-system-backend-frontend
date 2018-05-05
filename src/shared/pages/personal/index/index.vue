<template>
  <div class="personal">
    <div class="personal__header">个人中心</div>
    <div class="personal__content mt20">
      <el-button type="primary" @click="toggleStatus">{{ status }}</el-button>
      <el-input
        class="mt15"
        placeholder="请输入姓名"
        v-model="studentInfo.name"
        :disabled="isEdit">
        <template slot="prepend">姓名：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入学号"
        v-model="studentInfo.number"
        :disabled="isEdit">
        <template slot="prepend">学号：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入年级"
        v-model="studentInfo.grade"
        :disabled="isEdit">
        <template slot="prepend">年级：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入班级"
        v-model="studentInfo.class"
        :disabled="isEdit">
        <template slot="prepend">班级：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入年龄"
        v-model="studentInfo.age"
        :disabled="isEdit">
        <template slot="prepend">年龄：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入密码"
        v-model="studentInfo.password"
        type="password"
        :disabled="isEdit">
        <template slot="prepend">密码：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入邮箱"
        v-model="studentInfo.email"
        :disabled="isEdit">
        <template slot="prepend">邮箱：</template>
      </el-input>
      <el-input
        class="mt15"
        placeholder="请输入电话"
        v-model="studentInfo.telphone"
        :disabled="isEdit">
        <template slot="prepend">电话：</template>
      </el-input>
      <div class="mt15">
        性别：
        <el-select v-model="studentInfo.sex" placeholder="请选择" :disabled="isEdit">
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
  name: getComponentName('personal'),
  data () {
    return {
      isEdit: true,
      status: '编辑',
      studentInfo: {
        name: '',
        number: '',
        password: '',
        grade: '',
        class: '',
        sex: '',
        age: '',
        email: '',
        telphone: ''
      }
    }
  },
  methods: {
    toggleStatus () {
      this.isEdit = !this.isEdit
      this.status = this.isEdit ? '编辑' : '保存'
      if (this.isEdit) {
        this.updatedStudentInfo()
      }
    },
    getUserInfo () {
      let studentInfo = this.$storage.get('userInfo')
      this.studentInfo = {
        id: studentInfo.id,
        name: studentInfo.name,
        number: studentInfo.number,
        password: studentInfo.password,
        grade: studentInfo.grade,
        class: studentInfo.class,
        sex: studentInfo.sex,
        age: studentInfo.age,
        email: studentInfo.email,
        telphone: studentInfo.telphone
      }
    },
    updatedStudentInfo () {
      this.$store.dispatch('updatedUser', {
        data: {
          id: this.studentInfo.id,
          name: this.studentInfo.name,
          number: this.studentInfo.number,
          password: this.studentInfo.password,
          grade: this.studentInfo.grade,
          class: this.studentInfo.class,
          sex: this.studentInfo.sex,
          age: this.studentInfo.age,
          email: this.studentInfo.email,
          telphone: this.studentInfo.telphone
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '保存成功',
            type: 'success'
          })
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.personal {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.personal__header {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
}

.personal__content {
  padding-right: 400px;
  box-sizing: border-box;
}

</style>
<style lang="less">
.personal {
  .el-textarea {
    textarea {
      min-height: 250px !important;
    }
  }
}
</style>
