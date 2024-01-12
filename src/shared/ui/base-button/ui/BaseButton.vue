<template>
  <button :type="type" :class="buttonClass">
    <slot>Нажать</slot>
  </button>
</template>

<script setup lang="ts">
import { withDefaults, useCssModule, computed } from 'vue';

/** Типы пропсов */
interface Props {
  /** Тип кнопки */
  type: 'submit' | 'button' | 'reset';
  /** Визальный вариант кнопки */
  variant?: 'regular' | 'round';
  /** Используется ли темное оформление кнопки */
  isDarkStyle?: boolean;
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'regular',
  isDarkStyle: false,
});

/** CSS-классы */
const classes = useCssModule();

/** CSS-классы для кнопки */
const buttonClass = computed(() => {
  return {
    [classes.button]: true,
    [classes.buttonVariantRegular]: props.variant === 'regular',
    [classes.buttonVariantRound]: props.variant === 'round',
    [classes.buttonStyleDark]: props.isDarkStyle,
  };
});
</script>

<style lang="scss" module>
.button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  width: fit-content;
  padding: 0;
  cursor: pointer;
  text-align: center;
  text-transform: inherit;
  color: var(--neutral-dark, #1d1e25);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: var(--neutral-white, #ffffff);
  font: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    background-color: var(--neutral-light, #f5f5f5);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-outline, #2f80ed);
    outline-offset: 2px;
  }

  &VariantRegular {
    min-height: 36px;
    padding: 0 16px;
    border-radius: 36px;
    font-size: 12px;
    font-weight: 700;
    line-height: 36px;
  }

  &VariantRound {
    border-radius: 50%;
  }

  &StyleDark {
    color: var(--neutral-white, #ffffff);
    background-color: var(--neutral-dark, #1d1e25);

    &:hover {
      background-color: var(--neutral-less-dark, #35373d);
    }
  }
}
</style>
