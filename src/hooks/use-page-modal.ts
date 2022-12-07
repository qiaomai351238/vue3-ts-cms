import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultValue = ref({})
  const handleNewData = () => {
    defaultValue.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      console.log(pageModalRef.value)
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultValue.value = { ...item }
    console.log('defaultValue', defaultValue.value)
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, defaultValue, handleNewData, handleEditData]
}
