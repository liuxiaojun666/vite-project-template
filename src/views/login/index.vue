<script setup lang="ts">
import { useRouter } from 'vue-router'
import { addAsyncRoutes } from '@/router/permisstion'

const router = useRouter()
const msg = 'login page'

function login () {
  addAsyncRoutes()
  router.push({ name: 'home' })
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
