<script setup>
import { gotoHref } from "../utils/action";

defineProps({
  data: Object,
})
</script>

<template>
  <div class="wrap">
    <div class="wrap-main flex">
      <el-button round plain v-for="(it, i) in data" :key="i" @click="gotoHref(it.url)">
        {{it.name}}
      </el-button>
    </div>
    <div class="wrap-copy">
      <span>Copyright © www.xxxxx.com 上海xxxxxx有限公司 | 沪ICP备17033081号-5 | ICP证：沪B2-20130891 | 沪公网安备 31011502017843号</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px -2px 4px 0px rgba(0,0,0,0.1);
  &-main {
    margin: auto;
    height: 76px;
    max-width: 1180px;
  }
  &-copy {
    width: 100%;
    height: 52px;
    line-height: 52px;
    text-align: center;
    border-top: 1px solid #EBEEF2;
    span {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #B9BDC3;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
}
</style>