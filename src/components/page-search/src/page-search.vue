<template>
  <div class="page-search">
    <qm-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleReset">重置</el-button>
          <el-button type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </qm-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import QmForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { QmForm },
  emit: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    const handleReset = () => {
      // for (const key in formOriginData) {
      //   formData.value[key] = formOriginData[key]
      // }
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    const handleQueryClick = () => {
      console.log('点击了搜索')
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleReset, handleQueryClick }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
