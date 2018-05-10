<template>
  <div class="student-list">
    <div class="student-list__header">学生列表</div>
    <div class="student-list__content mt10">
      <el-button type="primary" size="small" @click="createStudent">添加学生</el-button>
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
        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="jumpDetail(scope.row)" type="text" size="small">查看详情</el-button>
            <el-button @click="deleteStudent(scope.row)" type="text" size="small">删除</el-button>
          </template>
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
      pageTotal: 32,
      currentPage: 1,
      studentList: []
    }
  },
  methods: {
    changePageIndex () {
    },
    jumpDetail (row) {
      this.$router.push({
        name: 'personal',
        params: {
          studentId: row.id
        }
      })
    },
    deleteStudent (row) {
      this.$store.dispatch('deleteUser', {
        params: {
          id: row.id
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getStudentList()
        }
      })
    },
    createStudent () {
      this.$router.push({
        name: 'student-create'
      })
    },
    getStudentList () {
      this.$store.dispatch('getUserList', {
        params: {
          pageSize: 10000,
          pageNum: 1
        }
      }).then(response => {
        if (response.data && response.data.errCode === 0) {
          this.studentList = []
          response.data.value.list.forEach(item => {
            this.studentList.push({
              id: item.id,
              name: item.name,
              number: item.number,
              grade: item.grade,
              class: item.class,
              email: item.email,
              telphone: item.telphone
            })
          })
        }
      })
    }
  },
  created () {
    this.getStudentList()
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
