<template>
  <div v-if="show" class="wrap">
    <img src="@/assets/close@3x.png" alt="" @click="close">
    <a :href="data.url">
      <el-image style="width: 100%; height:100px;" :src="data.img" fit="cover"/>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  data: {
    type: Object
  }
})

const show = ref(true)
const close = () => {
  show.value = false
}
</script>

<style lang="less" scoped>
  .wrap {
    position: relative;
    margin-bottom: -10px;
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      object-fit: cover;
      z-index: 1;
      background-color: #fff;
    }
  }
</style>