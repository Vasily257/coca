<template>
  <section class="home-partners">
    <h2 class="home-partners__title">890+</h2>
    <p class="home-partners__desc">
      some big companies that we&nbsp;work with, and trust&nbsp;us very much
    </p>
    <ul class="home-partners__list">
      <li v-for="(itemContent, index) in LIST_OF_CONTENT" :key="index" class="home-partners__item">
        <img
          :src="itemContent.iconPath"
          :alt="itemContent.altText"
          class="home-partners__item-image"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {
  airbnbIcon,
  amazonIcon,
  fedExIcon,
  googleIcon,
  microsoftIcon,
  olaIcon,
  oyoIcon,
  walmartIcon,
} from './icons';

/** Список контента */
const LIST_OF_CONTENT = [
  { iconPath: airbnbIcon, altText: 'airbnb logo' },
  { iconPath: amazonIcon, altText: 'amazon logo' },
  { iconPath: fedExIcon, altText: 'fedex logo' },
  { iconPath: microsoftIcon, altText: 'microsoft logo' },
  { iconPath: oyoIcon, altText: 'oyo logo' },
  { iconPath: walmartIcon, altText: 'walmart logo' },
  { iconPath: googleIcon, altText: 'google logo' },
  { iconPath: olaIcon, altText: 'ola logo' },
];
</script>

<style lang="scss"></style>
