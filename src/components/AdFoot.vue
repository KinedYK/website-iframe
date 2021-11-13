<template>
  <div v-if="show" class="adfoot">
    <div class="wrap">
      <div class="timedown">{{continueTime}}</div>
      <img src="@/assets/close@3x.png" alt="" @click="close">
      <a @click="gotoHref(data.url)">
        <el-image style="width: 100%; height: auto;" :src="data.img" fit="contain"/>
      </a>
    </div>
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
  .adfoot {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrap {
      position: relative;
      width: 50%;
      height: 50%;
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        object-fit: cover;
        z-index: 1;
      }
      .timedown {
        position: absolute;
        top: 20px;
        right: 5px;
        color: #fff;
        font-size: 16px;
        object-fit: cover;
        z-index: 1;
      }
    }
  }
  
</style>