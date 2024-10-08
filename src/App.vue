<template>
  <div>
    <header class="app-header">
      <h1 class="title">数据大屏实时展示</h1>
      <span class="time">当前时间: 2024年07月01日 09时59分53秒</span>
    </header>
    <main class="app-main">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </main>
  </div>
</template>

<script lang="ts" setup>
// import {ref,onMounted,onUnmounted} from "vue";
</script>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  // 外边距重叠 开启BFC解决
  overflow: hidden;
}
</style>
