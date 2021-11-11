<script setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="site-item flex">
    <img class="icon" :src="data.icon" alt="">
    <a class="m-line-1" :href="data.url">{{data.name}}</a>
    <a v-if="data.img" class="img-ad" :href="data.tipUrl">
      <img :src="data.img" alt="">
    </a>
    <div v-if="data.tip" class="text-ad">
      <a :href="data.tipUrl">{{data.tip}}</a> 
    </div>
  </div>
</template>

<style lang="less" scoped>
.site-item {
  width: 100%;
  height: 50px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
  .icon {
    width: 16px;
    height: 16px;
    object-fit: cover;
    margin-right: 10px;
  }
  .img-ad {
    margin-left: 4px;
    line-height: 1;
    img {
      width: 60px;
      height: 30px;
      object-fit: contain;
    }
  }
  
  .text-ad {
    margin-left: 0px;
    position: relative;
    width: 34px;
    height: 34px;
    padding: 4px 2px 2px;
    font-size: 10px;
    color: #FF0000;
    letter-spacing: 1px;
    text-align: center;
    line-height: 12px;
    background-image: url('@/assets/ac-bg@3x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>