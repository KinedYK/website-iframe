<script setup>
import {ref} from 'vue'

defineProps({
  data: {
    type: Array,
  },
});

// const list = ref(["人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网", "人民网",]);

</script>

<template>
  <div class="site-name">
    <span v-for="(it, i) in data" :key="i">
      <a :href="it.url">{{it.name}}</a>
    </span>
  </div>
</template>

<style lang="less" scoped>
.site-name {
  margin: auto;
  span { 
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #626972;
    font-weight: 400;
    &:not(last-child) {
      margin-right: 30px;
    }
    cursor: pointer;
    &:hover {
      color: @link-color
    }
  }
}
</style>