<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>{{ route.fullPath }} 没有发现</div>
</template>
