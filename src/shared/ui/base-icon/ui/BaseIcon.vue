<script setup lang="ts">
import defaultSvgSprite from './assets/sprite.svg';

/** Типы пропсов */
interface Props {
  /** Путь к спрайту */
  spritePath?: string;
  /** Название иконки */
  iconName?: string;
  /** Скрыть ли кнопку от скринридера */
  ariaHidden?: boolean;
}

/** Пропсы со значениями по умолчанию */
const props = withDefaults(defineProps<Props>(), {
  spritePath: defaultSvgSprite,
  iconName: 'calendar',
  ariaHidden: true,
});
</script>

<template>
  <svg class="icon" :aria-hidden="ariaHidden" role="img">
    <use :xlink:href="`${spritePath}#${iconName}`" />
  </svg>
</template>

<style lang="scss" scoped>
.icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}
</style>
