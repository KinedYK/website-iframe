<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="weather flex">
    <div class="item" v-for="(it, i) in data.splice(2)" :key="i">
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
  background: linear-gradient(rgb(47, 50, 92), rgb(30, 47, 139));
  border-radius: 8px;
  .item {
    width: 100px;
    color: #fff;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 10px;
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