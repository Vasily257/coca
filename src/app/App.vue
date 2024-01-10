<template>
  <TheHeader />
  <main class="main">
    <NuxtPage />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { TheFooter } from '@/widgets/the-footer';
import { TheHeader } from '@/widgets/the-header';
</script>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh);
}
</style>
