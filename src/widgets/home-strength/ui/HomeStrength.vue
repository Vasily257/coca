<script setup lang="ts">
import { teamPng } from './images';

/** Показатели */
const indicators = [
  {
    value: '17k',
    text: 'Happy customers on worldwide',
  },
  {
    value: '15+',
    text: 'Hours of work experience',
  },
  {
    value: '50+',
    text: 'Creativity & passionate members',
  },
  {
    value: '100+',
    text: 'Integrations lorem ipsum integrations',
  },
];
</script>

<template>
  <section class="home-strength">
    <ul class="home-strength__list">
      <li v-for="(indicator, index) in indicators" :key="index" class="home-strength__item">
        <h3 class="home-strength__item-title">{{ indicator.value }}</h3>
        <p class="home-strength__item-description">{{ indicator.text }}</p>
      </li>
    </ul>
    <picture>
      <img class="home-strength__image" :src="teamPng" height="162" width="335" alt="team" />
    </picture>
    <h2 class="home-strength__title">
      Drive sustainable growth with personal and engaging experiences
    </h2>
    <p class="home-strength__description">
      To&nbsp;build software that gives customer facing teams in&nbsp;small and medium-sized
      businesses the ability to&nbsp;create rewarding and long-lasting relationships with customers
    </p>
  </section>
</template>

<style lang="scss"></style>
