<script setup>
import {computed, ref} from 'vue'

// const list = ref(["电视剧", "电影","游戏","页游","新闻","社会","旅游","音乐"])

const props = defineProps({
  data: {
    type: Array,
  }
})

const list = computed(() => props.data[0].details.slice(0, 15)) 

</script>

<template>
  <div class="site m-border-1">
    <el-row>
      <el-col class="flex flex-center-row" v-for="i in Math.ceil(list.length/2)" :key="i" :span="12">
        <span class="text text-l">
          <a @click="gotoHref(list[(i-1)*2].url)">
            {{list[(i-1)*2].name}}
          </a>
        </span>
        <span class="split">|</span>
        <span class="text text-r">
          <a v-if="2*i-1 < list.length" @click="gotoHref(list[(i-1)*2].url)">{{list[2*i-1].name}}</a>
          <a v-else @click="gotoHref(data[0].url)" style="color: #5D96EA;">更多</a>
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.site {
  // padding: 10px 10px;
  .text {
    display: inline-block;
    width: 80px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
    line-height: 2;
    &-l {
      text-align: right;
    }
    &-r {
      text-align: left;
    }
  }
  .split {
    color: #CFD4DB;
    margin: 0 11px;
  }
}
  
</style>