<script setup>
import HomeMain from '~/components/blocks/HomeMain.vue';
import HomeData from '~/components/blocks/HomeData.vue';

/** Путь к svg-спрайту */
const svgSpritePath = 'svg/sprite.svg';
</script>

<template>
  <div>
    <HomeMain :svg-sprite-path="svgSpritePath" />
    <HomeData :svg-sprite-path="svgSpritePath" />
  </div>
</template>
