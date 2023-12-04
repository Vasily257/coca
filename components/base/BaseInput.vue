<script setup lang="ts">
/** Типы пропсов */
interface Props {
  /** ID поля */
  id: string;
  /** Имя поля */
  name?: string;
  /** Тип поля */
  type?: string;
  /** Значение поля */
  modelValue: string;
  /** Текст подписи */
  labelText?: string;
  /** Текст ошибки */
  errorText?: string;
  /** Замещающий текст */
  placeholder?: string;
  /** Тип автозаполнения */
  autocomplete?: string;
  /** Разрешенные символы */
  pattern?: string;
  /** Обязательно ли заполнять поле */
  isRequired?: boolean;
  /** Скрыта ли визуально подпись */
  isLabelVisuallyHidden?: boolean;
  /** Показать ли ошибку */
  isErrorShown?: boolean;
  /** Внешние CSS-классы подписи */
  labelOuterClass: string;
  /** Внешние CSS-классы поля ввода */
  inputOuterClass: string;
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  labelText: '',
  errorText: '',
  isLabelVisuallyHidden: true,
  isErrorShown: false,
  labelOuterClass: '',
  inputOuterClass: '',
});

/** Эмиты */
const emits = defineEmits(['update:modelValue', 'focus', 'blur']);

/** CSS-классы для поля ввода */
const labelClass = computed(() => {
  return {
    'label': true,
    'hidden-visually': props.isLabelVisuallyHidden,
  };
});

/** CSS-классы для поля ввода */
const inputClass = computed(() => {
  return {
    'input': true,
    'input--error': props.isErrorShown,
  };
});

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

<template>
  <div class="wrapper">
    <label v-if="labelText" :for="id" :class="[labelClass, props.labelOuterClass]">
      {{ labelText }}
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :pattern="pattern"
      :required="isRequired"
      :class="[inputClass, props.inputOuterClass]"
      @input="handleInput"
      @focusin="handleFocusIn"
      @focusout="handleFocusOut"
    />
    <span v-if="props.isErrorShown" class="error-text">{{ errorText }}</span>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  flex-grow: 1;
  min-height: inherit;
}

.label {
  color: var(--neutral-dark, #1d1e25);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}

.input {
  width: 100%;
  min-height: inherit;
  padding: 0 8px;
  color: var(--neutral-dark, #1d1e25);
  border-width: 1px;
  border-style: solid;
  border-color: var(--neutral-grey, #7e8492);
  border-radius: 4px;
  background-color: var(--neutral-white, #ffffff);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    border-color: var(--focus-outline, #2f80ed);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: var(--focus-outline, #2f80ed);
    caret-color: var(--focus-outline, #2f80ed);
  }

  &::placeholder {
    color: var(--neutral-grey, #7e8492);
  }

  &--error {
    border-color: var(--error, #eb5757);

    &:hover {
      border-color: var(--error, #eb5757);
    }

    &:focus-visible {
      border-color: var(--error, #eb5757);
      caret-color: var(--error, #eb5757);
    }

    &::placeholder {
      color: var(--error, #eb5757);
    }
  }
}

.error-text {
  position: absolute;
  top: 100%;
  right: 0;
  color: var(--error, #eb5757);
  font-size: 10px;
  line-height: 1.6;
}
</style>
