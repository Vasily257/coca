<template>
  <section class="home-main">
    <h1 class="home-main__page-title">Digitally forward creative</h1>
    <p class="home-main__page-desc">
      Our biggest challenge is&nbsp;making sure we&rsquo;re always designing and building products
      that will help you run your business better.
    </p>
    <form class="home-main__form">
      <BaseInput
        id="mail-input"
        type="mail"
        placeholder="Enter your email"
        class="home-main__input"
      />
      <BaseButton type="submit" is-dark-style class="home-main__submit-button">
        Try for free
      </BaseButton>
    </form>
    <div class="home-main__chart">
      <span class="home-main__chart-title">Sales Report</span>
      <!-- Добавить график -->
    </div>
    <ul class="home-main__list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" class="home-main__item">
        <span class="home-main__item-type">{{ contentItem.budgetType }}</span>
        <span class="home-main__item-amount">{{ contentItem.amount }}</span>
        <p class="home-main__item-change">
          <BaseIcon :name="contentItem.iconName" class="home-main__item-change-icon" />
          <span class="home-main__item-change-value"> {{ contentItem.changeValue }}</span>
          <span class="home-main__item-change-period">from last year</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon, BaseButton, BaseInput } from '@/shared/ui';

/** Список контента */
const LIST_OF_CONTENT = [
  {
    budgetType: 'Sales',
    amount: '$31,092',
    iconName: 'arrow-up',
    changeValue: '4.2%',
  },
  {
    budgetType: 'Marketing',
    amount: '$29,128',
    iconName: 'arrow-down',
    changeValue: '1.2%',
  },
];
</script>

<style lang="scss"></style>
