<template>
  <div class="activity-detail">
    <div class="activity-detail__header">活动详情</div>
    <div class="activity-detail__content">
        <div><span class="title">【活动名称】：</span>{{ activity.name }}</div>
        <div><span class="title">【活动地点】：</span>{{ activity.address }}</div>
        <div><span class="title">【活动时间】：</span>{{ activity.time }}</div>
        <div><span class="title">【负责人】：</span>{{ activity.chargeName }}</div>
        <div><span class="title">【负责人电话】：</span>{{ activity.chargePhone }}</div>
        <div><span class="title">【活动简介】：</span>{{ activity.description }}</div>
    </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('home'),
  data () {
    return {
      activity: {
        name: '街舞社团招新了！',
        address: '致远楼',
        time: '2018-05-12',
        chargeName: '小小',
        chargePhone: '13785585555',
        description: ' 一、 举办活动前，社团应统筹策划，书面作好活动的计划。 二、 活动的审批程序： 1、 领取《社团活动申请表》。（一般一次活动领取2份）（时间：周一至五；地点：行政楼团委办公室） 2、 按要求填好申请表后，直接送到团委办公室的书记助理审批。 3、 需借用教室等教学场地、仪器的，须向教务处申请。 4、 需借用体育场地、设施的，须向体育部申请。 5、 需借用校内其他场地的，须向保卫处申请。 三、 各大社团具体展开已获审批的活动。（一般应邀请负责干事参加其活动。） 四、 活动完满结束后的工作： 1、 各大应及时以书面形式（A4纸打印）整理出活动总结。 2、 在活动完全结束后的7天内，各社团应把总结和一份申请表（另一份申请表 和计划书由社团自行保存）迅速交到负责该社团的社团部干事手中。 3、 收到资料的干事，应在该个周五前交到团委办公室的社团资料架上。 校团委社团部'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.activity-detail {
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
}

.activity-detail__header {
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
}

.activity-detail__content {
  padding: 10px 0;
  line-height: 35px;
  .title {
    color: #ff0000;
  }
}
</style>
