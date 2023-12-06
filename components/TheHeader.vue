<script setup lang="ts">
const { svg } = useAppConfig();

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

<template>
  <header>
    <BaseLink class="header__logo-link">
      <BaseIcon
        :sprite-path="svg.spritePath"
        icon-name="logo"
        :aria-hidden="false"
        aria-label="website logo"
        class="header__logo-icon"
      />
    </BaseLink>
    <BaseButton class="header__menu-button">
      <BaseIcon :sprite-path="svg.spritePath" icon-name="burger-menu" class="header__menu-icon" />
    </BaseButton>
    <nav class="header__menu">
      <ul v-for="(content, index) in navigationContent" :key="index" class="header__menu-list">
        <li class="header__menu-item">
          <BaseLink :to="content.link" class="header__menu-link">
            {{ content.text }}
          </BaseLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss"></style>
