<template>
  <NuxtLink :to="to" :class="classes.link">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

/** Типы пропсов */
interface Props {
  /** Адрес, по которому нужно перейти */
  to?: string;
}

/** Пропсы со значениями по умолчанию */
withDefaults(defineProps<Props>(), {
  to: '/',
});

/** CSS-классы */
const classes = useCssModule();
</script>

<style lang="scss" module>
.link {
  text-decoration: none;
  color: inherit;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #2f80ed;
    outline-offset: 2px;
  }
}
</style>
