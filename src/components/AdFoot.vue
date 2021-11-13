<template>
  <div v-if="show" class="wrap">
    <div class="timedown">{{continueTime}}</div>
    <img src="@/assets/close@3x.png" alt="" @click="close">
    <a @click="gotoHref(data.url)">
      <el-image style="width: 100%; height: auto;" :src="data.img" fit="fill"/>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object
  },
})


const show = ref(false)
const close = () => {
  show.value = false
}

const continueTime = ref(null)

const timerOpen = () => { 
  setTimeout(() => {
    show.value = true
    timerClose()
  }, props.data.startTime * 1000)
}

continueTime.value = props.data.continueTime
console.log(props.data.continueTime, 'props.data.continueTime')
const timerClose = () => { 
  if (continueTime.value <= 0) {
    close()
    return
  }
  setTimeout(() => {
    continueTime.value -= 1
    timerClose()
  }, 1000)
}

timerOpen()
</script>

<style lang="less" scoped>
  .wrap {
    position: fixed;
    bottom: -10px;
    left: 0;
    right: 0;
    z-index: 9999;
    img {
      position: absolute;
      top: 10px;
      right: 0;
      width: 20px;
      height: 20px;
      object-fit: cover;
      z-index: 1;
    }
    .timedown {
      position: absolute;
      top: 30px;
      right: 5px;
      color: #fff;
      font-size: 16px;
      object-fit: cover;
      z-index: 1;
    }
  }
</style>