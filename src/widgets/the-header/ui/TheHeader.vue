<template>
  <header :class="[classes.header]">
    <BaseLink to="/" :class="classes.logoLink">
      <BaseIcon
        name="logo"
        :aria-hidden="false"
        aria-label="the website logo"
        :class="classes.logoIcon"
      />
    </BaseLink>
    <BaseButton :class="classes.menuButton">
      <BaseIcon name="burger-menu" :class="classes.menuIcon" />
    </BaseButton>
    <nav :class="classes.nav">
      <ul :class="classes.navlist">
        <li
          v-for="(contentItem, index) in LIST_OF_CONTENT"
          :key="index"
          :class="{
            [classes.navItem]: true,
            [classes.navItemContact]: index === LIST_OF_CONTENT.length - 1,
          }"
        >
          <BaseLink :to="contentItem.href" :class="classes.navItemLink">
            {{ contentItem.text }}
          </BaseLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import { PageRoute } from '@/shared/lib';
import { BaseIcon, BaseButton, BaseLink } from '@/shared/ui';

/** CSS-классы */
const classes = useCssModule();

/** Список контента (навигация) */
const LIST_OF_CONTENT = [
  {
    text: 'Home',
    href: PageRoute.Home,
  },
  {
    text: 'About',
    href: PageRoute.About,
  },
  {
    text: 'Blog',
    href: PageRoute.Blog,
  },
  {
    text: 'Pricing',
    href: PageRoute.Pricing,
  },
  {
    text: 'Contact Us ->',
    href: PageRoute.Contact,
  },
];
</script>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 20px 0;

  @media screen and (min-width: 768px) {
    padding: 26px 60px 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 26px 120px 0;
  }
}

.logoLink {
  text-decoration: none;
  color: inherit;
}

.logoIcon {
  width: 112px;
  height: 52px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 66px;
  }
}

.menuButton {
  min-height: 52px;
  padding: 0;
  padding-bottom: 4px;
  border: none;

  &:hover {
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.menuIcon {
  width: 24px;
  height: 24px;
}

.nav {
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
}

.navlist {
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    position: relative;
    top: -3px;
    left: 0;
    display: flex;
    column-gap: 32px;
    flex-direction: row;
  }
}

.navItem {
  transition: color 0.3s ease;
  color: var(--neutral-dark, #1d1e25);
  font-size: 16px;
  font-weight: 500;
  line-height: calc(26 / 16);

  &:hover {
    transition: color 0s;
    color: var(--neutral-grey, #7e8492);
  }
}

.navItemContact {
  position: relative;
  margin-left: 37px;
  color: var(--neutral-black, #000000);
  font-weight: 600;
  line-height: 1.5;

  &:hover {
    color: var(--neutral-black, #000000);

    &::before {
      transform: scaleX(1);
    }
  }

  &::after,
  &::before {
    position: absolute;
    top: calc(100% + 3px);
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    transition: transform 0.3s ease;
    background-color: var(--neutral-black, #000000);
  }

  &::before {
    z-index: 1;
    transform: scaleX(0);
    transform-origin: top left;
    background-color: var(--neutral-grey, #7e8492);
  }
}
</style>
