<template>
  <BaseButton :type="type" :class="textButtonClass">
    <slot>Нажать</slot>
  </BaseButton>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, withDefaults, useCssModule, computed } from 'vue';
import { BaseButton } from '../../base';

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
const textButtonClass = computed(() => {
  return {
    [classes.textButton]: true,
    [classes.textButtonStyleDark]: props.isDarkStyle,
  };
});
</script>

<style lang="scss" module>
.textButton {
  min-height: 36px;
  padding: 0 16px;
  border-radius: 36px;
  font-size: 12px;
  font-weight: 700;
  line-height: 36px;

  &StyleDark {
    color: var(--neutral-white, #ffffff);
    background-color: var(--neutral-dark, #1d1e25);

    &:hover {
      background-color: var(--neutral-less-dark, #35373d);
    }
  }
}
</style>
