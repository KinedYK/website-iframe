<template>
  <el-row class="news-row">
    <el-col :span="16">
      <div class="flex news-card">
        <el-image
          style="width: 158px; height: 120px; flex-shrink: 0;"
          :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
        ></el-image>
        <div class="news-card-content">
          <p class="m-line-2 news-card-title">
            <a href="">这次武则天只能排最后，史上最荒唐排行榜上最荒唐排行榜上最这次武则天只能排最后，史上最荒唐排行榜上最荒唐排行榜上最荒唐排行榜荒唐排行榜</a> 
          </p>
          <p class="news-card-tip">
            <span>回味餐厅</span>
            <span>|</span>
            <span>2021.11.04</span>
          </p>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="flex news-card--s" v-for="i in 2" :key="i">
        <el-image
          style="width: 120px; height: 58px; flex-shrink: 0;"
          :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
        ></el-image>
        <div style="font-size: 12px; padding-left: 5px;">
          <a href="">这次武则天只能排最后，史上最荒唐排行榜上最荒唐排行榜上最荒唐排行榜</a> 
        </div>
      </div>
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