<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  data: {
    type: Array,
    default:[]
  }
})

const emit = defineEmits(['to-bottom'])

const onScroll = (e) => {
  console.log(e.scrollTop)
  if (inner.value.$el.clientHeight - scroll.value.$el.clientHeight <= e.scrollTop) {
    emit('to-bottom', e)
  }
}

const scroll = ref(null)
const inner = ref(null)
onMounted(() => {
  // DOM 元素将在初始渲染后分配给 ref
  console.log(inner.value.$el.clientHeight)
  console.log(scroll.value.$el.clientHeight)
})
</script>

<template>
  <div class="hot-news">
    <div class="title flex flex-between">
      <span style="font-size: 20px; font-weight: bold; color: #388aef;">热点资讯</span>
      <span @click="gotoHref(data.hot)" style="cursor: pointer;">更多></span>
    </div>
    <el-scrollbar ref="scroll" height="978px" @scroll="onScroll">
        <el-row ref="inner">
          <el-col :span="12" v-for="(it, i) in data.vos" :key="i">
            <div class="flex news-card" @click="gotoHref(it.https_url)">
              <el-image
                style="width: 158px; height: 94px;"
                :src="it.pic43"
                fit="cover"
              ></el-image>
              <div class="news-card-content">
                <p class="m-line-2 news-card-title">
                  <a >{{it.title}}</a> 
                </p>
                <p class="news-card-tip m-line-1">
                  <span>{{it.source}}</span>
                  <span> | </span>
                  <span>{{it.pushdate}}</span>
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
  .hot-news {
    // height: 629px;
    background: #FFFFFF;
    border: 1px solid #CFD4DB;
    .title {
      height: 42px;
      padding: 0 10px;
      border-bottom: 1px solid #CFD4DB;
      margin: 0;
      img {
        width: 64px;
        height: 15px;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #B9BDC3;
        letter-spacing: 0;
        font-weight: 400;
      }
    }
    
  }

  .news-card {
    margin: 12px;
    cursor: pointer;
    &:hover {
      background-color: #F7F8FA;
      opacity: 0.9;
    }
    &-content {
      position: relative;
      width: 245px;
      height: 94px;
      padding: 5px 12px;
    }
    &-title {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0;
      font-weight: 400;
    }
    &-tip {
      position: absolute;
      bottom: 5px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #B9BDC3;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
</style>