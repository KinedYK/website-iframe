<template>
  <router-view></router-view>
</template>

<script setup>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

import { updataHref } from './utils/action.js'

const updataUrl = (event) => {
  let href = ''
  event.path.some((item, index)=> {
    if (item.localName === 'a') {href = item.href; return true;}
    if (index > 4) return true
  })
  if (href) {
    updataHref(href)
  }
}

onMounted(() => {
    window.addEventListener('click', updataUrl);
});

onUnmounted(() => {
    window.removeEventListener("click", updataUrl);
});

</script>

<style lang="less">
#app {
  z-index: 1;
  position: relative;
  background: #fcfcfc;
  font-family: PingFangSC-Regular, PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  a {
    color: inherit;
    &:hover {
      color: #FF0000;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
