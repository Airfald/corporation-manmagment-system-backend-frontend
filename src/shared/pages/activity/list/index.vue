<template>
  <div class="activity-list">
    <div class="activity-list__header">活动列表</div>
      <el-button
        class="mt15"
        type="primary"
        size="small"
        @click="createActivity">新建活动</el-button>
      <el-table
        class="mt15"
        stripe
        :data="activityList"
        style="width: 100%">
        <el-table-column
          align="center"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="活动名称"
          width="250">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="活动地点"
          width="250">
        </el-table-column>
        <el-table-column
          align="center"
          prop="corporation"
          label="举办社团">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="时间">
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="jumpDetail(scope.row)" type="text" size="small">查看活动详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <el-pagination
        class="mt25"
        slot="right"
        layout="total, prev, pager, next, jumper"
        :page-size="10"
        :total="pageTotal"
        :current-page.sync="currentPage"
        @current-change="changePageIndex">
      </el-pagination>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('activity-list'),
  data () {
    return {
      activityList: [{
        name: '街舞社团招新了！',
        address: '海园广场',
        corporation: '街舞社',
        time: '2018-5-12',
        chargeName: '小小',
        chargePhone: '13785698956'
      }],
      pageTotal: 32,
      currentPage: 1
    }
  },
  methods: {
    changePageIndex () {
    },
    jumpDetail (row) {
      this.$router.push({
        name: 'activity-detail'
      })
    },
    createActivity () {
      this.$router.push({
        name: 'activity-create'
      })
    }
  },
  created () {
    for (let index = 0; index < 5; index++) {
      this.activityList = this.activityList.concat(this.activityList)
    }
  }
}
</script>

<style lang="less" scoped>
.activity-list {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}

.activity-list__header {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
</style>
