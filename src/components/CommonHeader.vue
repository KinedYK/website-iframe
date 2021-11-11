<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SiteNameList from './SiteNameList.vue'

import { gotoSearch } from "../utils/action";

const router = useRouter()

const props = defineProps({
  data: {
    type: Object,
  }
})

const visiStatus = ref('hidden')
const innerHide = () => { visiStatus.value = 'hidden' }
const innerShow = () => { visiStatus.value = 'visible' }
const onClickOutside = (event) => { innerHide() }
const changeVisiStatus = () => {
  visiStatus.value === 'hidden' ? innerShow() : innerHide()
}

// 搜索方式
const currSearchItem =  computed(() => props.data.h[0]) 
const selectSearch = (it) => { 
  currSearchItem.value = it
}

// text
const searchText = ref(null)
</script>

<template>
  <div class="basic-top">
    <div class="abso-tr">
      
    </div>
    <div class="container">
      <div class="topbar-bd flex">
        <img class="logo" :src="data.g.img"/>
        <span>静安</span>
        <span class="splitter">|</span>
        <a class="weather-detail flex" href="http://">
          <img style="padding-right: 5px;" src="@/assets/sun@3x.png" alt="">
          <span style="padding-right: 5px;">今</span>
          <span style="padding-right: 5px;">阴</span>
          <span>12~20度</span>
        </a>
        <span class="splitter">|</span>
        <a class="weather-detail flex" href="http://">
          <img style="padding-right: 5px;" src="@/assets/sun@3x.png" alt="">
          <span style="padding-right: 5px;">明</span>
          <span style="padding-right: 5px;">阴</span>
          <span style="padding-right: 10px;">12~20度</span>
        </a>
        <a href="" class="flex">
          <span style="padding-right: 5px">查看本周天气</span>
          <span>></span>
        </a>
        <div class="date">
          <span style="padding-right: 16px">11月22日周二</span>
          <span>九月甘八</span>
        </div>
      </div>
      <!-- 搜索 -->
      <div class="logo-search">
        <div class="logo" style="margin-right: 8px;">
          <a :href="currSearchItem.url">
            <img :src="currSearchItem.logo" />
          </a>
        </div>
        <!-- 搜所方式 -->
        <el-dropdown style="margin-right: 30px;" placement="bottom-end">
          <div class="pulldown flex">
            <img src="@/assets/pulldown@3x.png" />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(it) in data.h" :key="it.channel">
                <div class="logo" style="padding: 5px;" @click="selectSearch(it)">
                  <img :src="it.logo" />
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="search">
          <div class="field has-addons border-gradient">
            <div class="control">
              <input
                class="input is-rounded cus-input"
                type="text"
                placeholder="搜索"
                v-model="searchText"
              />
            </div>
            <div class="control">
              <div class="button is-info is-rounded" @click="gotoSearch(searchText, currSearchItem.url)"> 搜索 </div>
            </div>
          </div>
          <!-- 下拉搜索菜单 -->
          <div style="position: relative;">
            <div class="search-history">
              <ul>
                <li class="demonstration flex" v-for="(it, i) in data.j" :key="i">
                  <img 
                    v-if="it.icon" 
                    style="width: 12px; height: 12px; object-fit: ccover; position: relative; top: 2px; margin-right: 5px;" 
                    :src="it.icon" 
                    alt="">
                    <span>
                      <a :href="it.url">{{ it.name }}</a>
                    </span>
                </li>
              </ul>
            </div>
            <div class="dropdown" v-click-outside="onClickOutside">
              <img class="dropdown-jr" src="@/assets/in@3x.png" alt="" @click="changeVisiStatus">
              <div class="dropdown-content" :style="{visibility: visiStatus}">
                <ul>
                  <li class="demonstration flex" v-for="(it, i) in data.j" :key="i">
                    <img class="icon" :src="it.icon" alt="">
                    <span class="m-line-1">
                      <a :href="it.url">{{ it.name }}</a>
                    </span>
                  </li>
                </ul>
                <span v-for="i in 4" :key="i" :class="`line${i}`" class="line"></span>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>

    <div class="nav-bar">
      <div class="nav-tab">
        <div
          class="tab-one"
          v-for="(it, i) in data.k.slice(0,16)"
          :key="i"
        >
          <img :src="it.icon" alt="" v-if="i%4 == 0">
          <span>
            <a :href="it.url">{{ it.name }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex" style="margin: 7px 0;">
    <SiteNameList :data="data.m"/>
  </div>
</template>

<style lang="less" scoped>
.basic-top {
  background: #fff;
  a {
    line-height: 1;
  }
  .container {
    margin: auto;
    width: 1180px;
  }
}

.topbar-bd {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #626972;
  font-weight: 400;
  .logo { 
    margin-right: 12px;
    width: 50px;
    height: 13px;
    object-fit: cover;
  }
  .weather-detail {
    img { 
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }  
  .date {
    position: absolute;
    right: 0;
  }
}

.splitter {
    margin-left: 10px;
    margin-right: 10px;
    color: #ccc;
    line-height: 33px;
}

.nav-bar {
  display: flex;
  width: 100vw;
  height: 44px;
  border-top: 1px solid #EBEEF2;
  border-bottom: 1px solid #CFD4DB;
  .nav-tab {
    margin: auto;
    width: 1180px;
    // width: 95%;
    height: 100%;
    display: flex;
    align-items:center;

    img {
      width: 16px;
      height: 16px;
      object-fit: contain;
      margin-right: 10px;
    }
  }

  .tab-one {
    height: 20px;
    flex-basis: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #333333;
    text-align: center;
    &:nth-child(4n) {
      border-right: 1px solid #CFD4DB;
    }
    &:last-child {
      border-right: none;
    }
    span:hover{
      color: @link-color;
    }
  }

  // .tab-one:hover {
  //   background: @theme-bold-color;
  // }
}

.logo {
  img {
    cursor: pointer;
    width: 128px;
    height: 40px;
  }
}

.logo-search {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // height: 112px;
  margin: 28px 0 14px 0;
  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .border-gradient{
      background-image: linear-gradient(170deg, @theme-wight-color,  @theme-color);
      border-radius: 4px;
    }
  }

  .pulldown {
    width: 24px;
    height: 40px;
    img {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
  }

  .cus-input {
    margin-left: 2px;
    margin-top: 2px;
    width: 686px;
    height: 36px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: none;
    border: none;
  }
 
  .button {
    width: 108px;
    height: 40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: @theme-color;
    font-family: PingFangSC-Medium;
    font-size: 17px;
    color: #FFFFFF;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 500;
  }

  .search-history {
    display: flex;
    width: 798px;
    // margin-left: 10px;
    ul {
      margin-left: 2px;
      overflow: hidden;
      height: 20px;
    }
    li {
      height: 20px;
      line-height: 20px;
      white-space: nowrap;
      float: left;
      position: relative;
      padding-right: 7px;
      display: inline;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      color: #626972;
      margin: 0 5px;
      cursor: pointer;
    }
    span:hover {
      color: @link-color;
    }
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 3px;
    &-jr {
      width: 14px;
      height: 14px;
      object-fit: contain;
      transform: rotate(90deg)
    }
    &-content {
      position: absolute;
      top: 20px;
      right: 0;
      width: 798px;
      z-index: 10;
      .line {
        width: 1px;
        height: 84%;
        background: #e2e4e7;
        position: absolute;
        top: 8%;
      }

      .xleft(@n, @i: 1) when (@i =< @n) {
        .line@{i} {
          left: (@i * 155px);
        }
        .xleft(@n, (@i + 1));
      }

      .xleft(4);

      ul li {
        width: 145px;
        height: 28px;
        line-height: 20px;
        white-space: nowrap;
        text-align: center;
        float: left;
        position: relative;
        padding-right: 7px;
        display: inline;
        margin: 0 5px;
        cursor: pointer;  
        span {
          display: inline-block;
          width: 108px;
          text-align: left;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #626972;
        }
      }
    }
    .demonstration {
      .icon {
        width: 12px;
        height: 20px;
        object-fit: contain;
        margin-right: 5px;
      }
    }
  }
}

.top-bg {
  width: 100vw;
  height: 40px;
  background: #f5f7f8;

  .top-bg-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    span {
      font-size: 14px;
      font-weight: 400;
      color: #545759;
      line-height: 14px;
      margin: 0 5px;
      cursor: pointer;
    }

    span:hover {
      color: @link-color;
    }

    span::after {
      content: "|";
      margin-left: 10px;
      font-size: 14px;
      font-weight: 400;
      color: #545759;
      line-height: 14px;
    }
    span:last-child::after {
      display: none;
    }
  }
}
</style>
