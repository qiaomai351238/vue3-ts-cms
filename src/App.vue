<template>
  <div class="app">
    <router-view></router-view>
  </div>

  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from 'components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
