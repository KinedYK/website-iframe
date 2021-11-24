<script setup>
defineProps({
  data: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <div class="hot-news">
    <div class="title flex flex-between">
      <img  src="@/assets/hotnews.png" alt="" />
      <span>更多></span>
    </div>
    <el-scrollbar height="978px">
        <el-row>
          <el-col :span="12" v-for="(it, i) in data" :key="i">
            <div class="flex news-card">
              <el-image
                style="width: 158px; height: 94px;"
                :src="it.pic43"
                fit="cover"
              ></el-image>
              <div class="news-card-content">
                <p class="m-line-2 news-card-title">
                  <a @click="gotoHref(it.https_url)">{{it.title}}</a> 
                </p>
                <p class="news-card-tip m-line-1">
                  <span>{{it.source}}</span>
                  <span> | </span>
                  <span>{{it.pushdate}}</span>
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
  .hot-news {
    // height: 1023px;
    background: #FFFFFF;
    border: 1px solid #CFD4DB;
    .title {
      height: 42px;
      padding: 0 10px;
      border-bottom: 1px solid #CFD4DB;
      margin: 0;
      img {
        width: 64px;
        height: 15px;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #B9BDC3;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
    
  }

  .news-card {
    margin: 12px;
    cursor: pointer;
    &:hover {
      background-color: #F7F8FA;
      opacity: 0.9;
    }
    &-content {
      position: relative;
      width: 245px;
      height: 94px;
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
  }
</style>