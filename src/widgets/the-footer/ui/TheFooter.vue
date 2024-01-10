<template>
  <footer>
    <div>
      <h2>Think beyond the wave</h2>
      <p>
        Ask about Sans products, pricing, implementation, or&nbsp;anything else. Our highly trained
        reps are standing&nbsp;by, ready to&nbsp;help
      </p>
      <BaseButton>Try for free</BaseButton>
    </div>
    <div class="footer-nav">
      <BaseIcon name="logo" class="footer-nav__logo" />
      <p class="footer-nav__desc">
        We&nbsp;built an&nbsp;elegant solution. Our team created a&nbsp;fully integrated sales and
        marketing solution for SMBs
      </p>

      <!-- Социальные сети -->
      <ul class="footer-nav__socials">
        <li v-for="(socialName, index) in SOCIAL_NAMES" :key="index" class="footer-nav__social">
          <BaseIcon :name="socialName" :sprite-path="spritePath" />
        </li>
      </ul>

      <!-- Мобильная навигация -->
      <ul class="footer-nav__list footer-nav__list--mobile">
        <li
          v-for="(navItem, index) in MOBILE_NAV"
          :key="index"
          class="footer-nav__item footer-nav__item--mobile"
        >
          <NuxtLink :to="navItem.href" class="footer-nav__link"> {{ navItem.text }}</NuxtLink>
        </li>
      </ul>

      <!-- Декстопная навигация -->
      <ul class="footer-nav__list footer-nav__list--desktop">
        <li
          v-for="(navItem, index) in DESKTOP_NAV"
          :key="index"
          class="footer-nav__item footer-nav__item--desktop"
        >
          <h3 class="footer-nav__item-title">{{ navItem.title }}</h3>
          <ul class="footer-nav__sub-list">
            <li
              v-for="(link, linkIndex) in navItem.links"
              :key="linkIndex"
              class="footer-nav__sub-item"
            >
              <NuxtLink :to="link.href" class="footer-nav__link"> {{ link.text }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <p class="footer-nav__copyright">&copy;&nbsp;Copyright 2024, All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { BaseButton, BaseIcon } from '@/shared/ui';
import { spritePath } from './icons';

/** Названия социальных сетей */
const SOCIAL_NAMES = ['facebook', 'x', 'instagram', 'linkedin'];

/** Навигации для мобильного вида */
const MOBILE_NAV = [
  { text: 'Privacy Policy', href: '' },
  { text: 'Terms & Conditions', href: '' },
  { text: 'Support', href: '' },
];

/** Навигации для декстопного вида */
const DESKTOP_NAV = [
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Jobs', href: '' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Product',
    links: [
      { text: 'Sales Software', href: '' },
      { text: 'Marketplace', href: '' },
      { text: 'Terms & Conditions', href: '' },
      { text: 'Privacy Policy', href: '' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'CRM Comparision', href: '' },
      { text: 'Partner Program', href: '' },
      { text: 'What is CRM', href: '' },
      { text: 'Resource', href: '' },
    ],
  },
  {
    title: 'Help Center',
    links: [
      { text: 'Community', href: '' },
      { text: 'Knowledge Base', href: '' },
      { text: 'Academy', href: '' },
      { text: 'Support', href: '' },
    ],
  },
];
</script>

<style lang="scss"></style>
../../icons
