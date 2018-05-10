<template>
  <div class="student-list">
    <div class="student-list__header">活动学生列表</div>
    <el-select v-model="value" placeholder="请选择" @change="getStudentList">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="student-list__content mt10">
      <el-table
        class="mt10"
        stripe
        :data="studentList"
        style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="number"
          label="学号"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="grade"
          label="年级">
        </el-table-column>
        <el-table-column
          align="center"
          prop="class"
          label="班级">
        </el-table-column>
        <el-table-column
          align="center"
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column
          align="center"
          prop="telphone"
          label="电话">
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <!-- <el-pagination
        class="mt25"
        slot="right"
        layout="total, prev, pager, next, jumper"
        :page-size="10"
        :total="pageTotal"
        :current-page.sync="currentPage"
        @current-change="changePageIndex">
      </el-pagination> -->
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('student-list'),
  data () {
    return {
      options: [],
      value: '',
      studentList: []
    }
  },
  methods: {
    getViewUser (id) {
      this.$store.dispatch('viewUser', {
        params: {
          id: id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          let studentInfo = response.data.value
          this.studentList.push({
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
          })
        }
      })
    },
    getStudentList () {
      this.$store.dispatch('studentActivityRel-getActivityStudentList', {
        params: {
          id: this.value
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.studentList = []
          if (response.data.value) {
            for (let i = 0; i < response.data.value.length; i++) {
              this.getViewUser(response.data.value[i].studentId)
            }
          }
        }
      })
    },
    getCorporationList () {
      this.$store.dispatch('activity-activityList', {
        params: {
          pageSize: 1000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.options = []
          response.data.value.list.forEach(item => {
            this.options.push({
              value: item.id,
              label: item.name
            })
          })
          this.value = this.options[0].value
          this.getStudentList()
        }
      })
    }
  },
  created () {
    this.getCorporationList()
  }
}
</script>

<style lang="less" scoped>
.student-list {
  border-radius: 10px;
  background-color: #ffffff;
}

.student-list__header {
  padding: 10px;
  border-bottom: 1px solid #cccccc;
}

.student-list__item {
  float: left;
  width: 25%;
  padding-top: 15px;
  padding-right: 10px;
  box-sizing: border-box;
  cursor: pointer;

  img {
  vertical-align: middle;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }
}

.student-list__item-name {
  font-size: 20px;
  color: #409EFF;
}

.student-txt {
  padding-left: 15px;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    color: #666666;
    font-size: 14px;
  }
}
</style>
