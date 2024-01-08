<template>
  <section class="home-data">
    <h2 class="home-data__title">
      Sans help our client solve complex customer problems with data that does more.
    </h2>
    <p class="home-data__desc">
      Our platform offers the modern enterprise full control of&nbsp;how data can be&nbsp;access and
      used with industry leading software solutions for identity, activation and data collaboration
    </p>
    <ul class="home-data__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-data__item">
        <BaseIcon :icon-name="contentItem.iconName" class="home-data__item-icon" />
        <h3 class="home-data__item-title">{{ contentItem.title }}</h3>
        <p class="home-data__item-desc">{{ contentItem.desc }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';

/** Список контента */
const LIST_OF_CONTENT = [
  {
    iconName: 'calendar',
    title: 'Build your data fundamental',
    desc:
      'Build access to&nbsp;data, develop valuable business insights' +
      'and drive revenue while maintaining full control over access' +
      'and use of&nbsp;data at&nbsp;all times.',
  },
  {
    iconName: 'check-mark-board',
    title: 'Measure more effective',
    desc:
      'Effectively measure people-based campaigns with the freedom' +
      'to&nbsp;choose from best-of breed partners to&nbsp;optimize' +
      'and drive media innovation.',
  },
  {
    iconName: 'list-board',
    title: 'Activate your data',
    desc:
      'Accurately address your specific audiences at&nbsp;scale' +
      'across any channel, platform, publisher or&nbsp;network' +
      'and safely translate data between identity space' +
      'to&nbsp;improve results.',
  },
  {
    iconName: 'protect',
    title: 'Strengthen consumer privacy',
    desc:
      'Protect your customer data with leading privacy-preserving technologies' +
      'and advanced techniques to&nbsp;minimize data movement while still enabling' +
      'insight generation.',
  },
];
</script>

<style lang="scss"></style>
