<template>
  <svg :class="classes.icon" :aria-hidden="ariaHidden" role="img">
    <use :xlink:href="`${spritePath}#${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import { svgSpritePath } from '@/shared/ui';

/** Типы пропсов */
interface Props {
  /** Название иконки */
  name?: string;
  /** Путь к спрайту с иконками */
  spritePath?: string;
  /** Скрыть ли иконку от скринридера */
  ariaHidden?: boolean;
}

/** Пропсы со значениями по умолчанию */
withDefaults(defineProps<Props>(), {
  spritePath: svgSpritePath || '',
  name: 'logo',
  ariaHidden: true,
});

/** CSS-классы */
const classes = useCssModule();
</script>

<style lang="scss" module>
.icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}
</style>
