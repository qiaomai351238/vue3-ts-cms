<template>
  <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log(valid)
          // 判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }

          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
