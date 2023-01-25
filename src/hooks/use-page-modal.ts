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
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    defaultValue.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, defaultValue, handleNewData, handleEditData]
}
