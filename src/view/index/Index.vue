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
import AdFoot from "@/components/AdFoot.vue";
import CouponList from '@/components/CouponList.vue'
import MbLikeList from '@/components/MbLikeList.vue'
import HotNewsItem from '@/components/HotNewsItem.vue'
import CopyRight from '@/components/CopyRight.vue'
import HotVideo from '@/components/HotVideo.vue'
import CommonFooter from '@/components/CommonFooter.vue'
import {ref, computed, onMounted, onUnmounted} from 'vue'

const first = ref(null);
const pro1 = axios.get("/api/augment/first").then((res) => {
  first.value = res.data.data;
  return res
});

const second = ref(null);
const pro2 = axios.get("/api/augment/second").then((res) => {
  second.value = res.data.data;
  return res
});

const third = ref(null);
const pro3 = axios.get("/api/augment/third").then((res) => {
  third.value = res.data.data;
  return res
});

const fourth = ref(null);
const pro4 = axios.get("/api/augment/fourth").then((res) => {
  fourth.value = res.data.data;
  return res
});

const loadStatus = ref(false)
const pros = () => {
  Promise.all([pro1, pro2, pro3, pro4]).then(ress => {
    console.log(ress, '请求完毕')
    loadStatus.value = true
    showScreenAdFn();
  })
}

// 开屏广告
const showScreenAdStatus = ref(false)
const showScreenAdFn = () => {
  setTimeout(() => {
    showScreenAdStatus.value = true
  }, 3000)
}

pros();

// 无限滚动
const count = ref(10)
const load = () => {
  if (count.value < 50) {
    count.value += 10
  }
}

// 备案信息
const showCopyRight = ref(false)
const handelScorll = (e) => {
  showCopyRight.value = document.documentElement.scrollTop > 3000
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
  <div v-else v-infinite-scroll="load">
    <AdRow :data="first.a"/>

    <div style="position: relative;">
      <CommonHeader :data="second"/>
      <div class="ad-d">
        <AdRow :data="first.d"/>
      </div>
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
      <el-row class="infinite-list m-border-1">
        <el-col v-for="i in count" :key="i" :span="12">
          <HotNewsItem />
        </el-col>
      </el-row>
    </div>

    <!-- 底部广告 -->
    <div class="showCopyRight" style="z-index: 15;">
      <AdRow :data="first.e"/>
    </div>
    

    <!-- 备案信息 -->
    <div v-if="showCopyRight">
      <div class="copy-block"> </div>
      <div class="showCopyRight">
        <CommonFooter :data="fourth"/>
      </div>
    </div>

    <!-- 侧边广告 -->
    <div class="ad-b ad-b--l">
      <AdRow :data="first.b[0]"/>
    </div>
    <div class="ad-b ad-b--r">
      <AdRow :data="first.b[1]"/>
    </div>

    <!-- 开屏广告 -->
    <div v-if="showScreenAdStatus">
      <AdFoot :data="first.f"/>
    </div>
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
.ad-d {
  position: absolute;
  top: 0;
  right: 0;
  width: 112px;
  height: 98px;
  object-fit: cover;
}

@media only screen
  and (min-width: 1500px) {
    .ad-b { 
      width: 330px !important;
      height: 330px !important;
    }
}

.ad-b {
  position: fixed;
  width: 100px;
  height: 100px;
  z-index: 999;
  &--l {
   top: 300px;
   left: 22px;
  }
  &--r {
    bottom: 200px;
    right: 22px;
  }
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

.showCopyRight {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
.copy-block {
  height: 135px;
  width: 100%;
}
</style>
