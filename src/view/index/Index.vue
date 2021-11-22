<script setup>
import AdSideC from '@/components/AdSideC.vue'
import SiteListO from '@/components/SiteListO.vue'
import TodayHotNews from '@/components/TodayHotNews.vue'
import SiteRtypesQlist from '@/components/SiteRtypesQlist.vue'
import SiteTypesListN from '@/components/SiteTypesListN.vue'
import RecomNews from '@/components/RecomNews.vue'
import RecomSoft from '@/components/RecomSoft.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import AdRow from "@/components/AdRow.vue";
import AdTime from "@/components/AdTime.vue";
import AdFoot from "@/components/AdFoot.vue";
import AdVideo from '@/components/AdVideo.vue'
import CouponList from '@/components/CouponList.vue'
import MbLikeList from '@/components/MbLikeList.vue'
import HotNewsItem from '@/components/HotNewsItem.vue'
import CopyRight from '@/components/CopyRight.vue'
import HotVideo from '@/components/HotVideo.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import SiteNameList from '@/components/SiteNameList.vue'
import Hot3NewsItem from '@/components/Hot3NewsItem.vue'
import {ref, computed, onMounted, onUnmounted} from 'vue'

const first = ref(null);
const pro1 = axios.get("/navigation/augment/first").then((res) => {
  first.value = res.data.data;
  return res
});

const second = ref(null);
const pro2 = axios.get("/navigation/augment/second").then((res) => {
  second.value = res.data.data;
  return res
});

const third = ref(null);
const pro3 = axios.get("/navigation/augment/third").then((res) => {
  third.value = res.data.data;
  return res
});

const fourth = ref(null);
const pro4 = axios.get("/navigation/augment/fourth").then((res) => {
  fourth.value = res.data.data;
  return res
});

const loadStatus = ref(false)
const pros = () => {
  Promise.all([pro1, pro2, pro3, pro4]).then(ress => {
    console.log(ress, '请求完毕')
    loadStatus.value = true
  })
}

pros();

// 屏幕宽高
let viewWidth = 0
let viewHeight = 0
viewWidth = document.documentElement.clientWidth
console.log(viewWidth, 'viewWidth')
viewHeight = document.documentElement.clientHeight
console.log(viewHeight, 'viewHeight')
const adOffsetD = ref(0)
adOffsetD.value = viewWidth/2 - 700 > 0 ? viewWidth/2 - 700 : 10
const adOffsetB = ref(0)
adOffsetB.value = viewWidth/2 - 800 > 0 ? viewWidth/2 - 800 : 10

// 备案信息
const showCopyRight = ref(false)
const handelScorll = (e) => {
  // console.log(e.srcElement.scrollingElement.scrollTop, e.srcElement.scrollingElement.scrollHeight)
  getScrollTop()
  // 是否显示备案信息
  showCopyRight.value = document.documentElement.scrollTop > 3000
  // 是否触底
  if(e.srcElement.scrollingElement.scrollHeight <= e.srcElement.scrollingElement.scrollTop + viewHeight) {
    console.log('触底啦')
    load()
  }
  
}

// 无限滚动
const count = ref(10)
const loadPageStatus = ref('more') // more nomore loading
const load = () => {
  loadPageStatus.value = 'loading'
  if (count.value < 50) {
    setTimeout(() => {
      count.value += 10
      loadPageStatus.value = 'more'
    }, 1000)
  } else {
    loadPageStatus.value = 'nomore'
  }
}

const loadTip = computed(() => {
  switch (loadPageStatus.value) {
    case 'loading':
      return '正在加载...';
    case 'nomore':
      return '我们也是有底线的~~';
    case 'more':
      return '更多';
    default: 
      return '更多';
  }
})

// 吸顶
const scrollTop = ref(0)
const getScrollTop = () => {
  scrollTop.value = document.documentElement.scrollTop
}

onMounted(() => {
    window.addEventListener('scroll', handelScorll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handelScorll);
});
</script>

<template>
  <div
    class="index-frame"
    v-if="!loadStatus"
    v-loading="!loadStatus"
    style="height: 100vh"
  ></div>
  <div v-else>
    <!-- 顶部广告 -->
    <AdRow :data="first.a" height="40px" fit="fill"/>

    <div style="position: relative; min-height: 191px; z-index: 999;">
      <CommonHeader :class="{sticky: scrollTop > 40}" :data="second"/>
    </div>

    <div class="flex" style="margin: 7px 0;">
      <SiteNameList :data="second.m"/>
    </div>

    <div class="main">
      <div class="sidebar">
        <AdSideC :data="first.c"/>

        <SiteTypesListN :data="third.n"/>
      </div>

      <div class="container">
        <SiteListO :data="third.o"/>
      </div>
    </div>

    <!-- 优惠券 -->
    <div style="margin-top: 15px;">
      <CouponList :data="second.s"/>
    </div>

    <!-- 猜你喜欢api -->
    <div style="margin-top: 15px;">
      <MbLikeList :data="second.s"/>
    </div>

    <div class="main">
      <div class="sidebar">
        <div class="m-bt-15">
          <RecomSoft :data="third.p"/>
        </div>

        <div class="m-bt-15">
          <RecomNews/>
        </div>

        <div class="m-bt-15">
          <RecomNews/>
        </div>
      </div>

      <div class="container">
        <!-- 网站分类 -->
        <div class="m-bt-15">
          <SiteRtypesQlist :dataR="third.r" :dataQ="third.q"/>
        </div>

        <!-- 今日热点 -->
        <div class="m-bt-15">
          <TodayHotNews/>
        </div>
      </div>
    </div>

    <!-- 全网首播 -->
    <div class="m-bt-15 main">
      <HotVideo />
    </div>

    <!-- 全网热点 无限滚动 -->
    <div class="m-bt-15">
      <div class="infinite-list m-border-1" style="border-bottom: none;">
        <div v-for="i in count" :key="i" style="border-bottom: 1px solid #f7f7f7;">
          <Hot3NewsItem />
        </div>
      </div>
      <div class="infinite-tip">
        ——<span>{{loadTip}}</span>——
      </div>
    </div>

    <!-- 备案信息 -->
    <div v-if="showCopyRight">
      <div class="copy-block"> </div>
      <div class="showCopyRight">
        <CommonFooter :data="fourth"/>
      </div>
    </div>

     <!-- 底部广告 -->
    <!-- <div class="showCopyRight" style="z-index: 1001;">
      <AdTime :data="first.e" :isBlur="true"/>
    </div> -->

    <!-- 两边可放大模块 -->
    <div class="ad-d ad-d--l" :style="{top: ((i * 200)) + 'px', left: adOffsetD + 'px'}" v-for="i in 3" :key="i">
      <AdRow v-if="first.d.length > i" :data="first.d[i]" fit="fill"/>
    </div>
    <div class="ad-d ad-d--r" :style="{top: (100 + (i * 200)) + 'px', right: adOffsetD + 'px'}" v-for="i in 2" :key="i">
      <AdRow v-if="first.d.length > i+2" :data="first.d[i + 2]" fit="fill"/>
    </div>

    <!-- 两边的广告B -->
    <div class="ad-b ad-b--l" :style="{left: adOffsetB + 'px'}">
      <AdTime :data="first.b[0]" fit="contain"/>
    </div>
    <div class="ad-b ad-b--r" :style="{right: adOffsetB + 'px'}">
      <AdTime :data="first.b[1]" fit="contain"/>
    </div>

    <!-- 视频广告W -->
    <div v-if="first.w.type == 1" class="ad-w">
      <AdTime :data="first.w" fit="contain"/>
    </div>
    <div v-else class="ad-w">
      <AdVideo :data="first.w"/>
    </div>

    <!-- 开屏广告F -->
    <AdFoot :data="first.f"/>
  </div>
  
</template>

<style lang="less" scoped>
.main {
  width: 1180px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .sidebar {
    flex-basis: 282px;
    flex-shrink: 0;
    overflow: hidden;
  }
  .container {
    flex-basis: 887px;
    flex-shrink: 0;
    flex-grow: 0;
    margin: 0;
  }
}

.sticky {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: #fff;
}

.ad-b {
  position: fixed;
  max-width: 200px;
  z-index: 1001;
  &--l {
   top: 100px;
   left: 10px;
  }
  &--r {
    top: 100px;
    right: 10px;
  }
}

.ad-d {
  position: fixed;
  max-width: 100px;
  max-height: 100px;
  z-index: 1000;
  &:hover {
    transform: scale(1.1);
  }
  &--l {
   top: 100px;
   left: 10px;
  }
  &--r {
    top: 100px;
    right: 10px;
  }
}

.ad-w {
  position: fixed;
  max-width: 200px;
  max-height: 200px;
  z-index: 989;
  bottom: 0;
  right: 0px;
}

.infinite-list {
  // height: 300px;
  width: 1180px;
  padding: 0;
  margin: 0 auto;
  list-style: none;

  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
    & + .list-item {
      margin-top: 10px;
    }
  }
}

.infinite-tip {
  text-align: center;
  font-size: 14px;
  color: #bcbcbc;
  margin: 10px 0 0 0;
  span {
    padding: 0 20px
  }
}

.showCopyRight {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
.copy-block {
  height: 55px;
  width: 100%;
}
</style>
