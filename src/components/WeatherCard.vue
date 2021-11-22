<script setup>
import {computed} from "vue"
const props = defineProps({
  data: Object
})

const list = computed(() => props.data.slice(2))
</script>

<template>
  <div class="weather flex">
    <div class="item" v-for="(it, i) in list" :key="i">
      <div class="week">{{it.week}}</div>
      <div class="date">{{it.date}}</div>
      <img :src="it.img" alt="">
      <div>{{it.temp}}</div>
      <div>{{it.weather}}</div>
      <div>{{it.wind}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.weather {
  min-width: 300px;
  min-height: 150px;
  background: linear-gradient(rgba(26,46,76,.8),rgba(55,100,140,.8));
  border-radius: 8px;
  backdrop-filter: blur(4px);
  .item {
    width: 140px;
    color: #fff;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    padding: 0 10px;
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    .date {
      color: rgb(185, 185, 185);
      font-size: 10px;
    }
    .week {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>