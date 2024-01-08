<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';
import { spritePath } from './icons';
import { assistancePng, meetingPng, speechPng, teamSupportPng } from './images';

/** Содержимое списка */
const CONTENT_OF_LIST = [
  {
    picturePath: assistancePng,
    altText: 'a man helps a woman',
    iconName: 'smile',
    title: 'Lead happiness for customers',
    desc:
      'Build more meaningful and lasting relationships&nbsp;&mdash; better understand' +
      ' their needs, identify new opportunities to&nbsp;help address any problems faster',
  },
  {
    picturePath: speechPng,
    altText: 'a man tells',
    iconName: 'people',
    title: 'Have fun growing together',
    desc:
      'Build more meaningful and lasting relationships&nbsp;&mdash; better understand' +
      ' their needs, identify new opportunities to&nbsp;help address any problems faster',
  },
  {
    picturePath: teamSupportPng,
    altText: 'people support each other',
    iconName: 'grow-up',
    title: 'Mutually support each other',
    desc:
      'Build more meaningful and lasting relationships&nbsp;&mdash; better understand' +
      ' their needs, identify new opportunities to&nbsp;help address any problems faster',
  },
  {
    picturePath: meetingPng,
    altText: 'people participate in the meeting',
    iconName: 'presentation',
    title: 'Make Your Business Grow',
    desc:
      'Build more meaningful and lasting relationships&nbsp;&mdash; better understand' +
      ' their needs, identify new opportunities to&nbsp;help address any problems faster',
  },
];
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <section class="home-relations">
    <h2 class="home-relations__title">890+</h2>
    <p class="home-relations__description">
      some big companies that we&nbsp;work with, and trust&nbsp;us very much
    </p>
    <ul class="home-relations__list">
      <li v-for="(contentItem, index) in CONTENT_OF_LIST" :key="index" class="home-relations__item">
        <picture>
          <img
            :src="contentItem.picturePath"
            :alt="contentItem.altText"
            class="home-relations__image"
          />
        </picture>
        <BaseIcon
          :icon-name="contentItem.iconName"
          :sprite-path="spritePath"
          class="home-relations__icon"
        />
        <h2 class="home-relations__title" v-html="contentItem.title" />
        <p class="home-relations__desc" v-html="contentItem.desc" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss"></style>
