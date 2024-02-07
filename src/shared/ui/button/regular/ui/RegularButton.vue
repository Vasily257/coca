<template>
  <BaseButton :type="type" :class="rootClass">
    <slot></slot>
  </BaseButton>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, withDefaults, useCssModule, computed } from 'vue';
import { BaseButton } from '@/shared/ui/button';

/** Типы пропсов */
interface Props {
  /** Тип кнопки */
  type?: ButtonHTMLAttributes['type'];
  /** Используется ли темное оформление кнопки */
  isDarkStyle?: boolean;
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  isDarkStyle: false,
});

/** CSS-классы */
const classes = useCssModule();

/** CSS-классы для кнопки */
const rootClass = computed(() => {
  return {
    [classes.regularButton]: true,
    [classes.regularButtonStyleDark]: props.isDarkStyle,
  };
});
</script>

<style lang="scss" module>
.regularButton {
  min-height: 34px;
  padding: 0 22px 0 21px;
  color: var(--neutral-dark, #1d1e25);
  border-radius: 34px;
  background-color: var(--neutral-white, #ffffff);
  font-size: 12px;
  font-weight: 700;
  line-height: 34px;
  flex-shrink: 0;

  &:hover {
    background-color: var(--neutral-light, #f5f5f5);
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
