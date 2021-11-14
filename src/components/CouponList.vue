<script setup>
import {ref, onMounted} from 'vue'
defineProps({
  data: Array,
})
 
const scrollbar = ref(null)
onMounted(() => {
  // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
  console.log(scrollbar.value.$el, 'onMounted') // <div/>
  autoScroll()
})

// 滚动条当前位置
let currScrollLeft = 0
const scrollWidth = ({ scrollLeft }) =>{
  // console.log(scrollLeft, 'scrollLeft')
  currScrollLeft = scrollLeft
}

// 向右自动滚动
const scrollStep = 1
const scrollStepTime = 20
let autoScrollTimer = null
let startAutoScrollLeft = 0
let isPuse = false
const autoScroll = () => {
  if (isPuse) return
  // 滚动到底部了
  if (startAutoScrollLeft > currScrollLeft + scrollStep * 5) {
    initAutoScroll()
  }
  autoScrollTimer = setTimeout(() => {
    startAutoScrollLeft += scrollStep
    scrollbar.value.setScrollLeft(startAutoScrollLeft)
    autoScroll()
  }, scrollStepTime)
}

// 重置自动滚动
let initTimer = null
const initAutoScroll = () => {
  isPuse = true
  if (initTimer) clearTimeout(initTimer)
  initTimer = setTimeout(() => {
    isPuse = false
    // 重置自动滚动的起点
    startAutoScrollLeft = 0
    autoScroll()
  }, 1000)
}

// 手动滚动
let wheelTimer = null
const mousewheelFunc = () => {
  isPuse = true
  if (wheelTimer) clearTimeout(wheelTimer)
  if (autoScrollTimer) clearTimeout(autoScrollTimer)
  wheelTimer = setTimeout(() => {
    isPuse = false
    // 重置自动滚动的起点
    startAutoScrollLeft = currScrollLeft
    console.log(currScrollLeft, 'currScrollLeft')
    autoScroll()
  }, 3000)
}
</script>

<template>
  <div class="coupon m-border-1">
    <div class="coupon-tip">
      <span>今日抢券</span>  
    </div>
    <el-scrollbar ref="scrollbar" @scroll="scrollWidth" @mousewheel="mousewheelFunc">
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