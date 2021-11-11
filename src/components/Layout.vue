<script setup>
import CommonHeader from "./CommonHeader.vue";

import {ref} from 'vue'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component
          :is="Component"
          class="main-content"
          :key="$route.fullPath"
        />
      </keep-alive>
    </transition>
  </router-view>
  <!-- <div class="" style="height: 100vh;">
    <iframe
      v-resize="{ log: true }"
      width="100%"
      height="100%"
      src="https://lanhuapp.com/web/#/item/project/detailDetach?pid=3d9a92b9-e713-41ce-9ca7-c117507a1728&project_id=3d9a92b9-e713-41ce-9ca7-c117507a1728&image_id=0976796f-acd3-4a97-a2f1-f09b567eecbf&fromEditor=true"
      frameborder="0"
    ></iframe>
  </div> -->
</template>

<style scoped>
a {
  color: #42b983;
}

.main-content {
  min-height: 500px;
}
</style>
