<template>
  <div v-if="show" class="wrap">
    <div class="timedown">{{continueTime}}</div>
    <img src="@/assets/close@3x.png" alt="" @click="close">
    <a :href="data.url">
      <video controls autoplay loop muted="false" width="200" :src="data.img">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </a>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
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
    position: relative;
    margin-bottom: -10px;
    height: 100%;
    img {
      position: absolute;
      top: 0px;
      right: 0;
      width: 20px;
      height: 20px;
      object-fit: cover;
      z-index: 1;
      // background-color: #fff;
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
</style>