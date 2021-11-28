<script setup lang="ts">
import { RouterView } from 'vue-router'
import useUserStore from '@/store/modules/userStore'

const userSotre = useUserStore()

setInterval(() => {
  userSotre.counter++
}, 1000)
</script>

<template>
  <RouterView />
</template>
