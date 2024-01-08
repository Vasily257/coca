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

/** Логотипы партернов */
const partnerLogos = [
  { path: airbnbIcon, alt: 'airbnb logo' },
  { path: amazonIcon, alt: 'amazon logo' },
  { path: fedExIcon, alt: 'fedex logo' },
  { path: microsoftIcon, alt: 'microsoft logo' },
  { path: oyoIcon, alt: 'oyo logo' },
  { path: walmartIcon, alt: 'walmart logo' },
  { path: googleIcon, alt: 'google logo' },
  { path: olaIcon, alt: 'ola logo' },
];
</script>

<template>
  <section class="home-partners">
    <h2 class="home-partners__title">890+</h2>
    <p class="home-partners__description">
      some big companies that we&nbsp;work with, and trust&nbsp;us very much
    </p>
    <ul class="home-partners__list">
      <li v-for="(logo, index) in partnerLogos" :key="index" class="home-partners__item">
        <img class="home-partners__image" :src="logo.path" :alt="logo.alt" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss"></style>
