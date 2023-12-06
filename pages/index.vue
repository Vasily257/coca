<script setup>
import HomeMain from '~/components/blocks/HomeMain.vue';
import HomeData from '~/components/blocks/HomeData.vue';

const { svg } = useAppConfig();
</script>

<template>
  <div>
    <HomeMain :svg-sprite-path="svg.spritePath" />
    <HomeData :svg-sprite-path="svg.spritePath" />
  </div>
</template>
