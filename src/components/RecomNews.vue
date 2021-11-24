<script setup>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import {ref, computed} from "vue"

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  names: {
    type: Array,
    default: () => []
  }
});

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const list = computed(() => Object.keys(props.data))

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
      <div class="recom-cell flex" v-for="(item, index) in names" :key="index">
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
        :interval="3000" 
        :autoplay="true" 
        height="110px" 
        type="" 
        arrow="always" 
        indicator-position="none"
        @change="changeHandle">
        <CarouselCardItem v-for="(it, i) in data[list[activeIndex]]" :key="i" :name="`cc_${i}`">
          <div class="swiper-item" @click="gotoHref(it.https_url)">
            <el-image style="width: 100%; height: 100%;"
              :src="it.pic43" alt="" ></el-image>
            <span class="swiper-item--text m-line-1">{{it.title}}</span>
          </div>
        </CarouselCardItem>
      </CarouselCard>
    </div>
    <ul>
      <li v-for="(it, i) in data[list[activeIndex]]" :key="i" class="m-line-1">
        <a @click="gotoHref(it.https_url)">{{it.title}}</a>
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