<script setup lang="ts">
/** Тип кнопки */
enum Type {
  submit = 'submit',
  button = 'button',
  reset = 'reset',
}

/** Визальный вариант кнопки */
enum Variant {
  regular = 'regular',
  round = 'regular',
}

/** Типы пропсов */
interface Props {
  /** Тип кнопки */
  type?: Type;
  /** Визальный вариант кнопки */
  variant?: Variant;
  /** Используется ли темное оформление кнопки */
  isDarkStyle?: boolean;
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  type: Type.button,
  variant: Variant.regular,
  isDarkStyle: false,
});

/** CSS-классы для кнопки */
const buttonClass = computed(() => {
  return {
    'button': true,
    'button--variant--regular': props.variant === Variant.regular,
    'button--variant--round': props.variant === Variant.round,
    'button--style--dark': props.isDarkStyle,
  };
});
</script>

<template>
  <button :type="type" :class="buttonClass">
    <slot>Нажать</slot>
  </button>
</template>

<style lang="scss" scoped>
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

  &--variant--regular {
    min-height: 36px;
    padding: 0 16px;
    border-radius: 36px;
    font-size: 12px;
    font-weight: 700px;
    line-height: 36px;
  }

  &--variant--round {
    border-radius: 50%;
  }

  &--style--dark {
    color: var(--neutral-white, #ffffff);
    background-color: var(--neutral-dark, #1d1e25);

    &:hover {
      background-color: var(--neutral-less-dark, #35373d);
    }
  }
}
</style>
