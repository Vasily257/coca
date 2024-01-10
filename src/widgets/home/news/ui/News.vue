<template>
  <section class="home-news">
    <h2 class="home-news__title">Trending news from Coca</h2>
    <p class="home-news__desc">we have some new Service to pamper you</p>
    <ul class="home-news__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-news__item">
        <picture>
          <img :src="contentItem.imagePath" alt="some alt text" class="home-news__item-image" />
        </picture>
        <span class="home-news__item-date">{{ contentItem.date }}</span>
        <span class="home-news__item-author">{{ contentItem.author }}</span>
        <h3 class="home-news__item-title">{{ contentItem.title }}</h3>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { news1Png, news2Png } from './images';

/** Список контента */
const LIST_OF_CONTENT = [
  {
    imagePath: news1Png,
    title: 'What makes an authentic employee profile, and why does it matter?',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
  },
  {
    imagePath: news2Png,
    title: 'How to build a Kaylen relationship with a good company',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
  },
];
</script>

<style lang="scss"></style>
