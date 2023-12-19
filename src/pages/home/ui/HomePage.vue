<script setup>
import { BaseIcon } from '~/src/shared/ui';

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

/** Текст внутри блока «Контроль данных» */
const dataControlText = [
  {
    icon: 'calendar',
    title: 'Build your data fundamental',
    description:
      'Build access to&nbsp;data, develop valuable business insights' +
      'and drive revenue while maintaining full control over access' +
      'and use of&nbsp;data at&nbsp;all times.',
  },
  {
    icon: 'check-mark-board',
    title: 'Measure more effective',
    description:
      'Effectively measure people-based campaigns with the freedom' +
      'to&nbsp;choose from best-of breed partners to&nbsp;optimize' +
      'and drive media innovation.',
  },
  {
    icon: 'list-board',
    title: 'Activate your data',
    description:
      'Accurately address your specific audiences at&nbsp;scale' +
      'across any channel, platform, publisher or&nbsp;network' +
      'and safely translate data between identity space' +
      'to&nbsp;improve results.',
  },
  {
    icon: 'protect',
    title: 'Strengthen consumer privacy',
    description:
      'Protect your customer data with leading privacy-preserving technologies' +
      'and advanced techniques to&nbsp;minimize data movement while still enabling' +
      'insight generation.',
  },
];
</script>

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
      <BaseButton type="submit" is-dark-style class="home-main__submit-button"
        >Try for free</BaseButton
      >
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

  <section class="home-data">
    <h2 class="home-data__title">
      Sans help our client solve complex customer problems with data that does more.
    </h2>
    <p class="home-data__description">
      Our platform offers the modern enterprise full control of&nbsp;how data can be&nbsp;access and
      used with industry leading software solutions for identity, activation and data collaboration
    </p>
    <ul class="home-data__control-list">
      <li v-for="(text, index) in dataControlText" :key="index" class="home-data__control-item">
        <BaseIcon :icon-name="text.icon" class="home-data__control-icon" />
        <h3 class="home-data__control-title">{{ text.title }}</h3>
        <p class="home-data__control-description">{{ text.description }}</p>
      </li>
    </ul>
  </section>
</template>
