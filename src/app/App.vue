<template>
  <TheHeader />
  <main class="main">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import { TheHeader } from '@/widgets/the-header';
</script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh);
}
</style>
