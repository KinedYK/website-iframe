<script setup>

</script>

<template>
  <div class="hot-news">
    <div class="title flex flex-between">
      <img  src="@/assets/hotnews.png" alt="" />
      <span>更多></span>
    </div>
    <el-scrollbar height="917px">
        <el-row>
          <el-col :span="12" v-for="item in 20" :key="item">
            <div class="flex news-card">
              <el-image
                style="width: 158px; height: 94px;"
                :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                fit="cover"
              ></el-image>
              <div class="news-card-content">
                <p class="m-line-2 news-card-title">
                  <a href="">这次武则天只能排最后，史上最荒唐排行榜上最荒唐排行榜上最荒唐排行榜</a> 
                </p>
                <p class="news-card-tip">
                  <span>回味餐厅</span>
                  <span>|</span>
                  <span>2021.11.04</span>
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
    // height: 629px;
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