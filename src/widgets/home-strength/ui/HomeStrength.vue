<template>
  <section class="home-strength">
    <ul class="home-strength__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-strength__item">
        <h3 class="home-strength__item-title">{{ contentItem.title }}</h3>
        <p class="home-strength__item-desc">{{ contentItem.desc }}</p>
      </li>
    </ul>
    <picture>
      <img class="home-strength__image" :src="teamPng" height="162" width="335" alt="team" />
    </picture>
    <h2 class="home-strength__title">
      Drive sustainable growth with personal and engaging experiences
    </h2>
    <p class="home-strength__desc">
      To&nbsp;build software that gives customer facing teams in&nbsp;small and medium-sized
      businesses the ability to&nbsp;create rewarding and long-lasting relationships with customers
    </p>
  </section>
</template>

<script setup lang="ts">
import { teamPng } from './images';

/** Список контента */
const LIST_OF_CONTENT = [
  {
    title: '17k',
    desc: 'Happy customers on worldwide',
  },
  {
    title: '15+',
    desc: 'Hours of work experience',
  },
  {
    title: '50+',
    desc: 'Creativity & passionate members',
  },
  {
    title: '100+',
    desc: 'Integrations lorem ipsum integrations',
  },
];
</script>

<style lang="scss"></style>
