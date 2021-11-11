<script setup>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import {ref} from "vue"

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const list = ref(["推荐","军事","政治","娱乐","体育"])
const activeIndex = ref(0)
const changeTab = (index) => {
  activeIndex.value = index
}

const changeHandle = (e) => {
  console.log(e)
}
</script>

<template>
  <div class="recom m-border-1">
    <div class="recom-tabs flex">
      <div class="recom-cell flex" v-for="(item, index) in list" :key="item">
        <span 
          @click="changeTab(index)"
          class="recom-cell--text flex" 
          :class="{'active':activeIndex === index}">
          {{item}}
        </span>
        <span v-if="index < list.length - 1" style="color: #CFD4DB; cursor: default;">|</span>
      </div>
    </div>
    <div class="swiper-wrap">
      <CarouselCard ref="carouselCardRef" 
        :interval="7000" 
        :autoplay="false" 
        height="110px" 
        type="" 
        arrow="always" 
        indicator-position="none"
        @change="changeHandle">
        <CarouselCardItem v-for="i in 3" :key="i" :name="`cc_${i}`">
          <div class="swiper-item">
            <el-image style="width: 100%; height: 100%;" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" ></el-image>
            <span class="swiper-item--text m-line-1">啊所发生的法师打所发生的法师打发斯蒂芬</span>
          </div>
        </CarouselCardItem>
      </CarouselCard>
    </div>
    <ul>
      <li v-for="item in 10" :key="item" class="m-line-1">
        <a href="">这是新闻内容这是新闻内容这是内新闻内新闻内新闻内新闻内容这是内容</a>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.recom {
  &-tabs {
    margin: 8px 0;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
  }
  &-cell {
    text-align: center;
    display: inline-block;
    margin-right: 0px;
    line-height: 24px;
    &--text {
      display: inline-block;
      width: 44px;
      height: 24px;
      margin: 0 4px;
      cursor: pointer;
      &:hover {
        .active
      }
    }
    .active {
      color: #fff;
      background-image: linear-gradient(151deg, #00C6FF 0%, #0072FF 100%);
      border-radius: 2px;
    }
  }
  ul li {
    margin: 10px 0;
    width: 260px;
    position: relative;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    padding-left: 20px;
    &:before {
      position: absolute;
      left: 10px;
      top: 8px;
      content: "";
      width: 3px;
      height: 3px;
      background: #626972;
      border-radius: 3px;
    }
  }
}

.swiper-wrap {
  position: relative;
  width: 100%;
  height: 110px;
  .swiper-item {
    width: 100%;
    height: 110px;
    &--text {
      position: absolute;
      text-align: center;
      bottom: 2px;
      left: 10px;
      right: 10px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 1.4px;
      text-align: center;
      font-weight: 400;
    }
  }
}
</style>