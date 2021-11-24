<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <el-row class="news-row">
    <el-col :span="16">
      <div class="flex news-card">
        <el-image
          style="width: 158px; height: 120px; flex-shrink: 0;"
          :src="data[0].pic43"
        ></el-image>
        <div class="news-card-content">
          <p class="m-line-2 news-card-title">
            <a @click="gotoHref(data[0].https_url)">{{data[0].title}}</a> 
          </p>
          <p class="news-card-tip m-line-1">
            <span>{{data[0].source}}</span>
            <span> | </span>
            <span>{{data[0].pushdate}}</span>
          </p>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <template v-for="i in 2" :key="i">
        <div v-if="data[i]" class="flex news-card--s" >
          <el-image
            style="width: 120px; height: 58px; flex-shrink: 0;"
            :src="data[i].pic43"
          ></el-image>
          <div style="font-size: 12px; padding-left: 5px;">
            <a @click="gotoHref(data[i].https_url)">{{data[i].title}}</a> 
          </div>
        </div>
      </template>
    </el-col>
  </el-row>
  
</template>

<style lang="less" scoped>
.news-row {
  margin: 12px;
}
.news-card {
  cursor: pointer;
  &:hover {
    background-color: #F7F8FA;
    opacity: 0.9;
  }
  &-content {
    position: relative;
    // width: 245px;
    height: 124px;
    padding: 5px 12px;
  }
  &-title {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
  }
  &-tip {
    position: absolute;
    bottom: 5px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #B9BDC3;
    letter-spacing: 0;
    font-weight: 400;
  }
  &--s {
    height: 60px;
    cursor: pointer;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &:hover {
      background-color: #F7F8FA;
      opacity: 0.9;
    }
  }
}
</style>