<template>
  <section class="home-features">
    <NuxtPicture
      class="home-features__image"
      format="avif,webp"
      src="/img/home-features.png"
      quality="85"
      height="374"
      width="335"
      alt="working on a computer"
    />
    <h2 class="home-features__title">
      Passion to&nbsp;increase company revenue up&nbsp;to&nbsp;85%
    </h2>
    <p class="home-features__description">
      Automate your sales, marketing and service in&nbsp;one platform. Avoid date leaks and enable
      consistent messaging
    </p>
    <ul class="home-features__list">
      <li v-for="(text, index) in featuresText" :key="index" class="home-features__item">
        <BaseIcon icon-name="check-mark" class="home-features__icon" />
        <p class="home-features__text">{{ text }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';

/** Текст внутри блока «Особенности» */
const featuresText = [
  'Close more deals with single&nbsp;&mdash; page contact managment',
  'Enjoy one-click calling, call scripts and voicemail automation',
  'Take stages and milestones of&nbsp;your deals to&nbsp;keep the sales process an&nbsp;track',
];
</script>

<style lang="scss"></style>
