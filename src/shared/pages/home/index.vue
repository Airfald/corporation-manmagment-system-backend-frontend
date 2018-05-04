<template>
  <div class="home">
    <!-- 社团图片 -->
    <el-carousel :interval="3000" type="card" height="350px">
      <!-- <el-carousel-item v-for="(item, index) in bannerImgs" :key="index">
        <img height="100%" src="../../assets/images/banner.jpg">
      </el-carousel-item> -->
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner1.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner2.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner3.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner4.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner5.jpg">
      </el-carousel-item>
      <el-carousel-item>
        <img width="100%" height="100%" src="../../assets/images/banner6.jpg">
      </el-carousel-item>
    </el-carousel>
    <!-- 最近活动和公告 -->
    <div class="latest clear">
      <div class="latest__activity fl">
        <div class="latest__activity-header clear">
          <span class="fl">近期活动</span>
          <a class="fr" @click="jumpActivityList">查看全部>></a>
        </div>
        <el-table
          :data="latestActivityData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="活动名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地点"
            width="100">
          </el-table-column>
          <el-table-column
            prop="corporation"
            label="举办社团"
            width="100">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="jumpDetail(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="latest__announcement fr">
        <div class="latest__announcement-header clear">
          <span class="fl">公告</span>
          <a class="fr" @click="jumpActivityList">查看全部>></a>
        </div>
        <el-table
          :data="latestActivityData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="150">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间"
            width="100">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地点"
            width="100">
          </el-table-column>
          <el-table-column
            prop="corporation"
            label="举办社团"
            width="100">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="jumpDetail(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 社团简介 -->
    <div class="corporation-description mt50">
      <div class="corporation-description__header">
        <img src="../../assets/images/corporation-logo.png">
        <span>学社联简介</span>
      </div>
      <el-collapse>
        <el-collapse-item title="简介" name="1">
          <div>湖南人文科技学院学生社团联合会（简称“学社联”），是全院学生社团自愿结合的学生社团联合组织，始终秉秉承“服务于学生社团的健康发展，服务于广大学生的全面成才”的宗旨，是学校以及社会联系广大学生的桥梁与纽带。学社联现设部门有:主席团、秘书处、公关部、组织部、活动部、宣传部、财务部、网络信息部八个部门。后因新时代互联网快速发展需要，延伸出湖南人文科技学院学生社团传媒中心，又称“社团菌”。</div>
        </el-collapse-item>
        <el-collapse-item title="宗旨" name="2">
          <div>服务于学生社团的健康发展，服务于广大学生的全面成才。</div>
        </el-collapse-item>
        <el-collapse-item title="学社联语录" name="3">
          <h3>三留三走</h3>
          <div>不怕苦的留下，想偷懒的请走。学东西的留下，过日子的请走。琢磨事的留下，琢磨人的请走。</div>
          <h3>十二字方针</h3>
          <div>从严治团，质量建团，智慧建团</div>
          <h3>十六字口号</h3>
          <div>承荣而生，载誉而死，我心如剑，宁折不弯</div>
        </el-collapse-item>
        <el-collapse-item title="部门职能及简介" name="4">
          <b>主席团: </b>全面主持学社联的整体工作，制定学社联的工作方针、计划等。<br><br>
          <b>秘书处: </b>负责学社联的文秘工作，协助各部门制定规章制度、收集各社团工作简报等。<br><br>
          <b>公关部: </b>负责学社联的公共关系、对外联络及礼仪工作；为学社联组织的社团工作和活动争取社会赞助等。<br><br>
          <b>组织部: </b>协助主席团做好学生社团组织管理工作，加强干部队伍建设等。<br><br>
          <b>财务部: </b>负责学社联和各学生社团财务以及财产设备的监督与管理，对学生社团进行财务监督等。<br><br>
          <b>活动部: </b>全面负责我校社团活动总体规划，策划和组织开展学社联大型活动，激励社团打造精品活动等。<br><br>
          <b>宣传部: </b>全面负责学生社团宣传工作，充分利用校内外媒体等各种资源宣传社团。<br><br>
          <b>网络信息部: </b>全面负责学社联和各学生社团的网络信息管理，制作更新维护学社联的网页，对社团工作进行信息反馈调查等。
        </el-collapse-item>
        <el-collapse-item title="学生社团概况" name="5">
          学生社团指的是学生为了实现会员的共同意愿和满足个人兴趣爱好的需求、自愿组成的、按照其章程开展活动的群众性学生组织。学生社团是我国校园文化建设的重要载体，是中国高校第二课堂的引领者。<br><br>
          我校现有59个不同的社团，学生社团共分为六大类：<br><br>
          <b>文化艺术类： </b>碧洲文学社、浅草文学社、青笛文学社、紫鸢文学社、人文戏曲协会、书画协会、话剧协会、陶然棋社、国际象棋俱乐部<br><br>
          <b>学术科技类： </b>数学建模协会、创意电子协会、国学协会、湘中大学生心理学协会、人文学习交流协会、中外文化交流协会<br><br>
          <b>兴趣拓展类： </b>同一首歌协会、台球协会、美食协会、DIY手工艺协会、Crazy电影协会、读者俱乐部、演讲与口才协会、小荷记者站、锦瑟艺术团、摇滚Wenkend、NS街舞社、微时代协会、Happy农场协会、集邮协会、B-box协会、青亭印社、HipHop社团、DC漫社、播音与主持艺术协会<br><br>
          <b>社会服务类： </b>爱心社、清沐环境保护协会、立峰服务社<br><br>
          <b>体育竞技类： </b>星星羽毛球协会、体育健身俱乐部、定向越野协会、地平线轮滑协会、龙段跆拳道协会、国球协会、网球协会、武术协会、军事爱好者协会、活力健美操协会<br><br>
          <b>理论实践类： </b>计算机协会、CSC创业者协会、营销协会、管理协会、英语俱乐部、起点论坛、法律协会、梦想旅行家协会、趣味与化学协会、电子俱乐部、证券协会、TST销售家协会、量化投资协会<br><br>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('home'),
  data () {
    return {
      bannerImgs: [{
        url: '../../assets/images/banner1.jpg'
      }, {
        url: '../../assets/images/banner2.jpg'
      }, {
        url: '../../assets/images/banner3.jpg'
      }, {
        url: '../../assets/images/banner4.jpg'
      }, {
        url: '../../assets/images/banner5.jpg'
      }],
      latestActivityData: [{
        name: '科技知识竞赛',
        time: '2018-5-12',
        address: '逸夫楼',
        corporation: '科技部'
      }, {
        name: '科技知识竞赛',
        time: '2018-5-12',
        address: '逸夫楼',
        corporation: '科技部'
      }, {
        name: '科技知识竞赛',
        time: '2018-5-12',
        address: '逸夫楼',
        corporation: '科技部'
      }, {
        name: '科技知识竞赛',
        time: '2018-5-12',
        address: '逸夫楼',
        corporation: '科技部'
      }, {
        name: '科技知识竞赛',
        time: '2018-5-12',
        address: '逸夫楼',
        corporation: '科技部'
      }]
    }
  },
  methods: {
    jumpDetail (row) {
      console.log(row)
      this.$router.push({
        name: 'activity-detail'
      })
    },
    jumpActivityList () {
      this.$router.push({
        name: 'activity-list'
      })
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.corporation-description {
  margin-left: 100px;
  margin-right: 100px;
  border-radius: 5px;
  border: 1px solid #cccccc;

  .corporation-description__header {
    display: flex;
    height: 100px;
    padding: 0 10px;
    font-family: '宋体';
    font-size: 30px;
    line-height: 100px;
    border-bottom: 1px solid #cccccc;
    color: #666666;

    img {
      width: 100px;
      height: 100%;
      margin-right: 15px;
    }
  }
}

.latest {
  .latest__activity {
    width: 48%;
    .latest__activity-header {
      padding: 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #cccccc;
      a {
        font-size: 12px;
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
  .latest__announcement {
    width: 48%;
    .latest__announcement-header {
      padding: 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #cccccc;
      a {
        font-size: 12px;
        color: #409EFF;
        cursor: pointer;
      }
    }
  }
}
</style>
