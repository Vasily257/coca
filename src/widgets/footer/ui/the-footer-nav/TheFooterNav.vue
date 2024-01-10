<template>
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
</template>

<script setup lang="ts">
import { BaseIcon } from '@/shared/ui';
import { spritePath } from '../icons';

/** Названия социальных сетей */
const SOCIAL_NAMES = ['facebook', 'x', 'instagram', 'linkedin'];

/** Навигации для мобильного вида */
const MOBILE_NAV = [
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: 'Terms & Conditions', href: '/terms-and-conditions' },
  { text: 'Support', href: '/support' },
];

/** Навигации для декстопного вида */
const DESKTOP_NAV = [
  {
    title: 'Company',
    links: [
      { text: 'About', href: '/about' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Jobs', href: '/jobs' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Product',
    links: [
      { text: 'Sales Software', href: '/sales-software' },
      { text: 'Marketplace', href: '/marketplace' },
      { text: 'Terms & Conditions', href: '/terms-and-conditions' },
      { text: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'CRM Comparision', href: '/crm-comparision' },
      { text: 'Partner Program', href: '/partner-program' },
      { text: 'What is CRM', href: '/what-is-crm' },
      { text: 'Resource', href: '/resource' },
    ],
  },
  {
    title: 'Help Center',
    links: [
      { text: 'Community', href: '/community' },
      { text: 'Knowledge Base', href: '/knowledge' },
      { text: 'Academy', href: '/academy' },
      { text: 'Support', href: '/support' },
    ],
  },
];
</script>

<style lang="scss"></style>
