<script setup lang="ts">
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/userStore'

const router = useRouter()
const msg = 'login page'

async function login () {
  const userStore = useUserStore()
  const success = await userStore.login({
    user_name: 'admin',
    password: '123456'
  })
  success && router.push({ name: 'home' })
}
</script>

<template>
  <div>
    {{ msg }}
    <button @click="login">
      登录
    </button>
  </div>
</template>
