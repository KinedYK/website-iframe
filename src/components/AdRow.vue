<template>
  <div v-if="show" class="wrap">
    <img src="@/assets/close@3x.png" alt="" @click="close">
    <a @click="gotoHref(data.url)">
      <el-image :style="{height: height, width: width}" :src="data.img" :fit="fit"/>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  data: {
    type: Object
  },
  fit: {
    type: String,
    default: "cover"
  },
  height: {
    type: String,
    default: "100%"
  },
  width: {
    type: String,
    default: "100%"
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
    height: 100%;
    img {
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      object-fit: cover;
      z-index: 1;
      // background-color: #fff;
    }
  }
</style>