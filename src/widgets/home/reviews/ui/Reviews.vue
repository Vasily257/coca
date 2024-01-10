<template>
  <section class="home-reviews">
    <h2 class="home-reviews__title">What our customer are saying</h2>
    <p class="home-reviews__desc">
      We are trusted numerous companies from different business to meet their needs
    </p>
    <ul class="home-reviews__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-reviews__item">
        <BaseIcon name="quote" :sprite-path="spritePath" />
        <div>
          <ul v-for="score in contentItem.rating" :key="score">
            <li>
              <BaseIcon name="star" :sprite-path="spritePath" />
            </li>
          </ul>

          <span>{{ contentItem.rating + '.0' }}</span>
          <p>{{ contentItem.text }}</p>
        </div>
        <div>
          <img src="" alt="avatar" />
          <p>{{ contentItem.authorName }}</p>
          <p>{{ contentItem.authorActivity }}</p>
          <div>
            <BaseButton />
            <BaseButton />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseButton, BaseIcon } from '@/shared/ui';
import { spritePath } from './icons';

/** Список контента */
const LIST_OF_CONTENT = [
  {
    rating: 5,
    title: 'What makes an authentic employee profile, and why does it matter?',
    text:
      'With Agency the results are very satisfying. wrapped with Hight quality' +
      ' and innovative design that makes a&nbsp;surge of&nbsp;visitors' +
      ' on&nbsp;my&nbsp;websiteJan 30, 2021',
    authorName: 'Renee Wells',
    authorActivity: 'Product Designer, Quotient',
  },
];
</script>

<style lang="scss"></style>
