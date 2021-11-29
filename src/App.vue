<script setup lang="ts">
import { RouterView } from 'vue-router'
import useCounterStore from '@/store/modules/counter'

const counterStore = useCounterStore()

setInterval(() => {
  counterStore.counter++
}, 1000)
</script>

<template>
  <RouterView />
</template>
