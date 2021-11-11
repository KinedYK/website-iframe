<script setup>
import SiteItem from './SiteItem.vue'
import {ref} from 'vue'

defineProps({
  data: {
    type: Array,
  },
});
</script>

<template>
  <div class="site">
    <el-row>
      <el-col :span="4" v-for="(it, i) in data" :key="i">
        <SiteItem :data="it"/>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.site {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #CFD4DB;
  padding: 10px 0;
  padding-left: 10px;
}
</style>