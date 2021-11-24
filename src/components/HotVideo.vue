<script setup>

</script>

<template>
  <div class="hot-news">
    <div class="title flex flex-between">
      <img  src="@/assets/hotv.png" alt="" />
      <span>更多></span>
    </div>
    <el-scrollbar height="500px" width="500px">
        <el-row>
          <el-col :span="6" v-for="item in 20" :key="item">
              <el-image
                style="width: 100%; height: 200px; padding: 0 5px;"
                :src="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"
                fit="cover"
              ></el-image>
          </el-col>
        </el-row>
      </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
  .hot-news {
    // height: 629px;
    background: #ffffff;
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
</style>