<template>
  <div class="corporation-list">
    <div class="corporation-list__header">社团列表</div>
      <div class="corporation-list__content">
        <div
          class="corporation-list__item"
          v-for="(item, index) in corporationList"
          :key="index"
          @click="jumpDetail">
          <div><img width="100%" height="100%" src="../../../assets/images/corporation.jpg"></div>
          <div class="corporation-txt">
            <h4 class="corporation-list__item-name">{{ item.name }}</h4>
            <p>欢迎加入我们协会</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import getComponentName from 'shared@/config/components-define'
export default {
  name: getComponentName('corporation-list'),
  data () {
    return {
      corporationList: [{
        name: '街舞社团'
      }]
    }
  },
  methods: {
    changePageIndex () {
    },
    jumpDetail (row) {
      this.$router.push({
        name: 'corporation-detail'
      })
    }
  },
  created () {
    for (let index = 0; index < 5; index++) {
      this.corporationList = this.corporationList.concat(this.corporationList)
    }
  }
}
</script>

<style lang="less" scoped>
.corporation-list {
  border-radius: 10px;
  background-color: #ffffff;
}

.corporation-list__header {
  padding: 10px;
  border-bottom: 1px solid #cccccc;
}

.corporation-list__item {
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

.corporation-list__item-name {
  font-size: 20px;
  color: #409EFF;
}

.corporation-txt {
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
