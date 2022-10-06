<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldChange">
      <Fold v-show="!isFold" />
      <Expand v-show="isFold" />
    </el-icon>
    <div class="content">
      <qm-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import QmBreadcrumb from '@/base-ui/breakcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo,
    QmBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldChange = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, breadcrumbs, handleFoldChange }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
