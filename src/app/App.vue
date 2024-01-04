<script setup lang="ts">
import { TheHeader } from '@/widgets/the-header';
</script>

<template>
  <TheHeader />
  <main class="main">
    <NuxtPage />
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh);
}
</style>
