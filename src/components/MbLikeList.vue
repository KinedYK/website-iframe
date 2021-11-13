<script setup>
import {ref} from 'vue'

// defineProps({
//   data: Array,
// })

const data = ref([
  {
    name: 'p0',
    details: ["军事","军事","军事","军事","军事","军事事","军事","发送"],
    url: ''
  },
  {
    name: 'p1',
    details: ["军事","军事","军事","军事","军事", "发送的", "军事事","军事",],
    url: ''
  },
  {
    name: 'p2',
    details: ["军事","军事", "发斯蒂芬", "军事","军事","军事","军事事","军事",],
    url: ''
  },
])

</script>

<template>
  <div class="coupon m-border-1">
    <div class="coupon-tip">
      <span>猜你喜欢</span>  
    </div>
    <div class="site-content">
      <div class="flex" v-for="(iq, i) in data" :key="i">
        <span style="color: #5D96EA; width: 40px;">
          <a @click="gotoHref(iq.url)">{{iq.name}}</a>
        </span>
        <el-row style="flex-grow: 1;">
          <el-col class="flex" style="height: 40px;" :span="3" v-for="(it, i) in iq.details" :key="i">
            <span><a href="">{{it}}</a></span>
          </el-col>
        </el-row>
        <span style="color: #B9BDC3; padding: 0 20px;"><a @click="gotoHref(iq.url)">换一换</a></span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.coupon {
  position: relative;
  width: 1180px;
  // height: 98px;
  margin: auto;
  img {
    width: 152px;
    height: 68px;
    object-fit: fill;
  }
  &-tip {
    position: absolute;
    top: 22px;
    left: 0;
    width: 22px;
    height: 74px;
    background: #D8D8D8;
    background-image: linear-gradient(151deg, #00C6FF 0%, #0072FF 100%);
    border-radius: 0 3px 3px 0;
    z-index: 10;
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      padding-top: 10px;
      writing-mode: vertical-lr;
      font-weight: 400;
    }
  }
  .site-content {
    // height: 98px;
    // width: 980px;
    padding: 0 0 0 46px;

    .left20 { 
      position: relative;
      left: 20px;
    }
  }
}
</style>