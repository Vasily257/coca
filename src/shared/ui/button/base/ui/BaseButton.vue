<template>
  <button :type="type" :class="classes.baseButton">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { type ButtonHTMLAttributes, withDefaults, useCssModule } from 'vue';

/** Типы пропсов */
interface Props {
  /** Тип кнопки */
  type?: ButtonHTMLAttributes['type'];
}

/** Пропсы со значениями по умолчанию */
withDefaults(defineProps<Props>(), {
  type: 'button',
});

/** CSS-классы */
const classes = useCssModule();
</script>

<style lang="scss" module>
.baseButton {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  user-select: none;
  text-align: center;
  vertical-align: bottom;
  border: 1px solid transparent;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--focus-outline, #2f80ed);
    outline-offset: 2px;
  }
}
</style>
