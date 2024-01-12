<template>
  <section class="home-partners">
    <h2 class="home-partners__title">890+</h2>
    <p class="home-partners__desc">
      some big companies that we&nbsp;work with, and trust&nbsp;us very much
    </p>
    <ul class="home-partners__list">
      <li v-for="(itemContent, index) in LIST_OF_CONTENT" :key="index" class="home-partners__item">
        <BaseIcon
          :name="itemContent.iconName"
          :sprite-path="spritePath"
          :aria-hidden="false"
          :aria-label="itemContent.altText"
          class="home-partners__item-image"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';
import { spritePath } from './icons';

/** Список контента */
const LIST_OF_CONTENT = [
  { iconName: 'airbnb', altText: 'the Airbnb logo' },
  { iconName: 'amazon', altText: 'the Amazon logo' },
  { iconName: 'fed-ex', altText: 'the FedEx logo' },
  { iconName: 'microsoft', altText: 'the Microsoft logo' },
  { iconName: 'oyo', altText: 'the Oyo logo' },
  { iconName: 'walmart', altText: 'the Walmart logo' },
  { iconName: 'google', altText: 'the Google logo' },
  { iconName: 'ola', altText: 'the Ola logo' },
];
</script>

<style lang="scss"></style>
