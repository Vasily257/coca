<template>
  <section :class="classes.homeTop">
    <h1 :class="classes.pageTitle">Digitally forward creative</h1>
    <p :class="classes.pageDesc">
      Our biggest challenge is&nbsp;making sure we&rsquo;re always designing and building products
      that will help you run your business better.
    </p>
    <form :class="classes.form">
      <div :class="classes.inputWrapper">
        <label for="mail-input" class="hidden-visually">Your email</label>
        <BaseInput id="mail-input" type="text" :class="classes.input" />
        <span :class="classes.inputPlaceholder">Enter your email</span>
        <span :class="classes.inputError">invalid email</span>
      </div>
      <RegularButton type="submit" is-dark-style :class="classes.submitButton">
        Try for free
      </RegularButton>
    </form>
    <div :class="classes.chart">
      <span :class="classes.chartTitle">Sales Report</span>
      <!-- Добавить график -->
    </div>
    <ul :class="classes.list">
      <li v-for="(contentItem, index) in LIST_OF_CONTENT" :key="index" :class="classes.item">
        <span :class="classes.itemType">{{ contentItem.budgetType }}</span>
        <span :class="classes.itemAmount">{{ contentItem.amount }}</span>
        <p :class="classes.itemChange">
          <BaseIcon :name="contentItem.iconName" :class="classes.itemChangeIcon" />
          <span :class="classes.itemChangeValue"> {{ contentItem.changeValue }}</span>
          <span :class="classes.itemChangePeriod">from last year</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

import { BaseIcon, RegularButton, BaseInput } from '@/shared/ui';

/** CSS-классы */
const classes = useCssModule();

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

<style lang="scss" module>
.homeTop {
  color: var(--neutral-dark, #1d1e25);
}

.pageTitle {
  margin: 0;
  padding: 0;
  letter-spacing: -1px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
}

.pageDesc {
  position: relative;
  margin: 0;
  margin-top: 47px;
  margin-left: 32px;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  &::before {
    position: absolute;
    top: 11px;
    left: -32px;
    display: block;
    width: 24px;
    height: 1px;
    content: '';
    background-color: var(--neutral-black, #000000);
  }
}

.form {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 40px;
}

.inputWrapper {
  position: relative;
  flex-basis: 100%;
  border-bottom: 1px solid var(--neutral-grey, #7e8492);
}

.input {
  border: none;
}

.inputPlaceholder {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--neutral-grey, #7e8492);
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
}

.inputError {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  color: var(--error, #eb5757);
  font-size: 10px;
  line-height: 1.25;
}
</style>
