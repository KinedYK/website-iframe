<script setup>
import { ref, computed } from 'vue'
defineProps({
  dataR: {
    type: Array,
  },
  dataQ: {
    type: Array,
  },
})

const a = computed(() => {
  console.log(dataR)
})
const list = ref(["军事","军事","军事","军事","军事","军事事","军事","军事事事","军事","军事","军事","军事",])
</script>

<template>
  <div class="site">
    <div class="site-title flex">
      <span v-for="(ir, i) in dataR" :key="i">
        <a @click="gotoHref(ir.url)">{{ir.name}}</a> 
      </span>
    </div>
    <div class="site-content">
      <el-row style="margin: 12px 0;" v-for="(iq, i) in dataQ" :key="i">
        <el-col :span="1">
          <span style="color: #5D96EA;">
            <a @click="gotoHref(iq.url)">{{iq.name}}</a>
          </span>
        </el-col>
        <el-col class="left20" :span="3" v-for="(it, i) in iq.details" :key="i">
          <span><a @click="gotoHref(it.url)">{{it.name}}</a></span>
        </el-col>
        <el-col class="left20" :span="2">
          <span style="color: #B9BDC3;"><a @click="gotoHref(iq.url)">更多></a></span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .site {
    // height: 629px;
    background: #FFFFFF;
    border: 1px solid #CFD4DB;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
    &-title {
      height: 42px;
      padding: 0 10px;
      border-bottom: 1px solid #CFD4DB;
      overflow: hidden;
      margin-bottom: 0;
      span {
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #5D96EA;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 400;
        margin-right: 20px;
        &::before {
          content: "·";
          position: absolute;
          left: -14px;
          color: #626972;
        }
      }
    }
    &-content {
      padding: 0 14px;

      .left20 { 
        position: relative;
        left: 20px;
      }
    }
  }
</style>