<template>
  <input
    :type="type"
    :value="modelValue"
    :class="classes.baseInput"
    @input="handleInput"
    @focusin="handleFocusIn"
    @focusout="handleFocusOut"
  />
</template>

<script setup lang="ts">
import { type InputHTMLAttributes, useCssModule } from 'vue';

/** Типы пропсов */
interface Props {
  /** Тип поля */
  type?: InputHTMLAttributes['type'];
  /** Значение поля */
  modelValue?: string;
}

/** Типы эмитов */
interface Emits {
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
}

/** Пропсы со значениями по умолчанию */
withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
});

/** Эмиты */
const emits = defineEmits<Emits>();

/** CSS-классы */
const classes = useCssModule();

/**
 * Обработать снятие фокуса
 * @param event событие фокуса
 */
const handleFocusOut = (event: FocusEvent) => {
  emits('blur', event);
};

/**
 * Обработать появление фокуса
 * @param event событие фокуса
 */
const handleFocusIn = (event: FocusEvent) => {
  emits('focus', event);
};

/**
 * Обработать ввод
 * @param event событие ввода
 */
const handleInput = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emits('update:modelValue', event.target.value);
  }
};
</script>

<style lang="scss" module>
.baseInput {
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: var(--focus-outline, #2f80ed);
    caret-color: var(--focus-outline, #2f80ed);
  }
}
</style>
