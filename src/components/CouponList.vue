<script setup>
defineProps({
  data: Array,
})
</script>

<template>
  <div class="coupon m-border-1">
    <div class="coupon-tip">
      <span>今日抢券</span>  
    </div>
    <el-scrollbar>
      <div class="flex-content">
        <p v-for="(item, i) in data" :key="i" class="scrollbar-demo-item">
          <a @click="gotoHref(item.url)">
            <img :src="item.img" alt="">
          </a>
        </p>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.coupon {
  position: relative;
  width: 1180px;
  // height: 98px;
  margin: auto;
  img {
    width: 152px;
    height: 68px;
    object-fit: fill;
  }
  &-tip {
    position: absolute;
    top: 10px;
    left: 0;
    width: 22px;
    height: 74px;
    background: #D8D8D8;
    background-image: linear-gradient(151deg, #00C6FF 0%, #0072FF 100%);
    border-radius: 0 3px 3px 0;
    z-index: 10;
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      padding-top: 10px;
      writing-mode: vertical-lr;
      font-weight: 400;
    }
  }
  .flex-content {
    display: flex;
    height: 98px;
    align-items: center;
    .scrollbar-demo-item {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 152px;
      height: 68px;
      margin: 10px;
     
      &:first-child {
        margin-left: 44px;
      }
    }
  }
}
</style>