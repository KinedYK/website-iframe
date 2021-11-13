<script setup>
import {ref} from "vue"

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

// const list = ref(["必备软件","常用软件"])
const activeIndex = ref(0)
const changeTab = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="recom m-border-1">
    <div class="recom-tabs flex">
      <div class="recom-cell flex" v-for="(item, index) in data" :key="item">
        <span 
          @click="changeTab(index)"
          class="recom-cell--text flex" 
          :class="{'active':activeIndex === index}">
          {{item.name}}
        </span>
        <span v-if="index < data.length - 1" style="color: #CFD4DB; cursor: default;">|</span>
      </div>
    </div>
    <el-row class="recom-row">
      <el-col style="padding-left: 10px;" :span="12" v-for="(it, jndex) in data[activeIndex].details" :key="jndex" class="m-line-1 item">
        <img class="icon" :src="it.icon" alt="">
        <span>
          <a @click="gotoHref(it.url)">{{it.name}}</a>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.recom {
  &-tabs {
    margin: 8px 0;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    padding: 0 10px;
  }
  &-row {
    .item {
      margin: 5px 0;
    }
    img {
      width: 16px;
      height: 16px;
      object-fit: cover;
    }
    span {
      padding: 0 10px;
    }
  }
  &-cell {
    text-align: center;
    display: inline-block;
    margin-right: 0px;
    line-height: 24px;
    &--text {
      display: inline-block;
      // width: 44px;
      height: 24px;
      margin: 0 4px;
      cursor: pointer;
      &:hover {
        .active
      }
    }
    .active {
      color: #5D96EA;
    }
  }
}
</style>