<template>
  <div class="footer">
    <div class="container">
      <div class="footer-left">
        <div class="copyright">{{ data.t.content }}</div>
        <div class="copyright2" style="line-height: 3;">
          <template v-for="(it, i) in data.u" :key="i">
            <el-tooltip
              v-if="it.tap"
              effect="light"
              class="item"
              placement="top-start"
            >
              <template #content>
                <a :href="it.tipUrl">{{it.tip}}</a>
              </template>
              <a :href="it.url">{{ it.name }}</a>
            </el-tooltip>
            <span v-else>
              <a :href="it.url">{{it.name }}</a>
            </span>
          </template>
          <template v-for="(it, i) in data.v" :key="i">
            <span v-if="it.url">
              <a :href="it.url">
                {{it.name}}：{{it.content}}
              </a>
            </span>
            <span v-else>
              {{it.name}}：{{it.content}}
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  data: {
    type: Object,
  }
})
</script>

<style scoped lang="less">
.footer {
  width: 100vw;
  background: #545759;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 20px;
  padding: 20px 0 0 0;
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &-right {
    img {
      cursor: pointer;
      width: 243px;
      height: 66px;
    }
  }

  &-left {
    .concats {
      margin: 5px 0;
      span {
        cursor: pointer;
      }
      span:hover {
        color: @link-color;
      }
      span::after {
        content: "|";
        margin: 0 15px;
      }
      span:last-child::after {
        content: "";
      }
    }

    .copyright,
    .copyright2 {
      font-size: 12px;
      font-weight: 400;
      color: rgba(245, 247, 248, 0.7);
      line-height: 12px;
      margin: 10px 0;
      span:hover {
        color: @link-color;
      }
      span::after {
        content: "";
        margin: 0 5px;
      }
    }
  }
}
</style>
