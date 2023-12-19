<script setup lang="ts">
import { TheHeader } from '@/widgets';
</script>

<template>
  <div>
    <TheHeader />
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: calc(100vh);
}
</style>
