<template>
  <section class="home-features">
    <picture>
      <img
        :src="workplacePng"
        height="374"
        width="335"
        alt="a workplace with a computer"
        class="home-features__image"
      />
    </picture>
    <h2 class="home-features__title">
      Passion to&nbsp;increase company revenue up&nbsp;to&nbsp;85%
    </h2>
    <p class="home-features__desc">
      Automate your sales, marketing and service in&nbsp;one platform. Avoid date leaks and enable
      consistent messaging
    </p>
    <ul class="home-features__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-features__item">
        <BaseIcon name="check-mark" class="home-features__item-icon" />
        <p class="home-features__item-icon">{{ contentItem }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';
import { workplacePng } from './images';

/** Список контента */
const LIST_OF_CONTENT = [
  'Close more deals with single&nbsp;&mdash; page contact managment',
  'Enjoy one-click calling, call scripts and voicemail automation',
  'Take stages and milestones of&nbsp;your deals to&nbsp;keep the sales process an&nbsp;track',
];
</script>

<style lang="scss"></style>
