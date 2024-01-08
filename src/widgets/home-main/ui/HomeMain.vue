<template>
  <section class="home-main">
    <h1 class="home-main__page-title">Digitally forward creative</h1>
    <p class="home-main__page-description">
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
    <div class="home-main__line-chart">
      <span class="home-main__line-chart-title">Sales Report</span>
      <!-- Добавить график -->
    </div>
    <ul class="home-main__budget-list">
      <li v-for="(text, index) in budgetText" :key="index" class="home-main__budget-item">
        <span class="home-main__budget-type">{{ text.budgetType }}</span>
        <span class="home-main__budget-amount">{{ text.amount }}</span>
        <p class="home-main__budget-change">
          <BaseIcon :icon-name="text.icon" class="home-main__budget-change-icon" />
          <span class="home-main__budget-change-value"> {{ text.changeValue }}</span>
          <span class="home-main__budget-change-period">from last year</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { BaseIcon, BaseButton, BaseInput } from '@/shared/ui';

/** Текст внутри блока «Бюджеты» */
const budgetText = [
  {
    budgetType: 'Sales',
    amount: '$31,092',
    icon: 'arrow-up',
    changeValue: '4.2%',
  },
  {
    budgetType: 'Marketing',
    amount: '$29,128',
    icon: 'arrow-down',
    changeValue: '1.2%',
  },
];
</script>

<style lang="scss"></style>
