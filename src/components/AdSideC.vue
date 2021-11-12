<template>
  <div v-if="show" class="wrap">
    <!-- <img src="@/assets/close@3x.png" alt="" @click="close"> -->
    <CarouselCard ref="carouselCardRef" 
      :interval="7000" 
      :autoplay="true" 
      height="110px" 
      type="" 
      arrow="always" 
      indicator-position="none"
      @change="changeHandle">
      <CarouselCardItem v-for="(it, i) in data" :key="i" :name="`cc_${i}`">
        <div class="swiper-item">
          <el-image style="width: 100%; height: 100%;" :src="it.img" alt="" ></el-image>
          <span class="swiper-item--text m-line-1">{{it.name}}</span>
        </div>
      </CarouselCardItem>
    </CarouselCard>
  </div>
</template>

<script setup>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'
import { ref } from 'vue'
defineProps({
  data: {
    type: Array
  }
})

const show = ref(true)
const close = () => {
  show.value = false
}

const changeHandle = (e) => {
  console.log(e)
}
</script>

<style lang="less" scoped>
  .wrap {
    position: relative;
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      object-fit: cover;
      z-index: 1;
      background-color: #fff;
      z-index: 10;
    }
  }
</style>