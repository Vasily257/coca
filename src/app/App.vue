<template>
  <TheHeader />
  <main :class="pageClass">
    <NuxtPage />
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { TheFooter } from '@/widgets/the-footer';
import { TheHeader } from '@/widgets/the-header';
import { usePage } from '@/shared/lib';

import '@/app/styles/index.scss';

const { isHomePage } = usePage();

/** CSS-классы */
const classes = useCssModule();

/** CSS-класс страницы */
const pageClass = computed(() => ({
  [classes.page]: true,
  [classes.pageHome]: isHomePage,
}));
</script>

<style lang="scss" module>
.page {
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 120px;
  }

  &Home {
    margin-top: 29px;
  }
}
</style>
