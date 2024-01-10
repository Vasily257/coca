<template>
  <header>
    <BaseLink class="header__logo-link">
      <BaseIcon
        name="logo"
        :aria-hidden="false"
        aria-label="website logo"
        class="header__logo-icon"
      />
    </BaseLink>
    <BaseButton class="header__menu-button">
      <BaseIcon name="burger-menu" class="header__menu-icon" />
    </BaseButton>
    <nav class="header__nav">
      <ul v-for="(content, index) in navigationContent" :key="index" class="header__list">
        <li class="header__item">
          <BaseLink :to="content.link" class="header__item-link">
            {{ content.text }}
          </BaseLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { BaseIcon, BaseButton, BaseLink } from '@/shared/ui';

/** Навигация */
const navigationContent = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Blog',
    link: '/blog',
  },
  {
    text: 'Pricing',
    link: '/pricing',
  },
  {
    text: 'Contact Us',
    link: '/contact',
  },
];
</script>

<style lang="scss"></style>
