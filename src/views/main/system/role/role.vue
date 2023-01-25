<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultValue"
      :modalConfig="modalConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'role',
  components: { PageContent, PageSearch, PageModal },
  setup() {
    const [pageModalRef, defaultValue, handleNewData, handleEditData] =
      usePageModal()

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultValue,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
