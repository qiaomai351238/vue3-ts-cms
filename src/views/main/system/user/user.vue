<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>