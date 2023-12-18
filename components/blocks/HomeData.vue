<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';

/** Типы пропсов */
interface Props {}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {});

/** Текст внутри блока «Контроль данных» */
const dataControlText = [
  {
    icon: 'calendar',
    title: 'Build your data fundamental',
    description:
      'Build access to&nbsp;data, develop valuable business insights' +
      'and drive revenue while maintaining full control over access' +
      'and use of&nbsp;data at&nbsp;all times.',
  },
  {
    icon: 'check-mark-board',
    title: 'Measure more effective',
    description:
      'Effectively measure people-based campaigns with the freedom' +
      'to&nbsp;choose from best-of breed partners to&nbsp;optimize' +
      'and drive media innovation.',
  },
  {
    icon: 'list-board',
    title: 'Activate your data',
    description:
      'Accurately address your specific audiences at&nbsp;scale' +
      'across any channel, platform, publisher or&nbsp;network' +
      'and safely translate data between identity space' +
      'to&nbsp;improve results.',
  },
  {
    icon: 'protect',
    title: 'Strengthen consumer privacy',
    description:
      'Protect your customer data with leading privacy-preserving technologies' +
      'and advanced techniques to&nbsp;minimize data movement while still enabling' +
      'insight generation.',
  },
];
</script>

<template>
  <section class="home-data">
    <h2 class="home-data__title">
      Sans help our client solve complex customer problems with data that does more.
    </h2>
    <p class="home-data__description">
      Our platform offers the modern enterprise full control of&nbsp;how data can be&nbsp;access and
      used with industry leading software solutions for identity, activation and data collaboration
    </p>
    <ul class="home-data__control-list">
      <li v-for="(text, index) in dataControlText" :key="index" class="home-data__control-item">
        <BaseIcon :icon-name="text.icon" class="home-data__control-icon" />
        <h3 class="home-data__control-title">{{ text.title }}</h3>
        <p class="home-data__control-description">{{ text.description }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss"></style>
