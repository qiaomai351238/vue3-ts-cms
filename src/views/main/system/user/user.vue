<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <qm-table :propList="propList" :listData="userList">
        <template #status="scope">
          <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
        <template #createAt="scope">
          {{ scope.row.createAt }}
          <!-- <strong>哈哈哈</strong> -->
        </template>
      </qm-table>
    </div>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import { defineComponent, computed } from 'vue'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'
import QmTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: { PageSearch, QmTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    return { userList, propList, searchFormConfig }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
