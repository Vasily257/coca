<template>
  <HomeTop />
  <HomeData />
  <HomeFeatures />
  <HomeStrength />
  <HomePartners />
  <HomeRelations />
  <HomeNews />
  <HomeReviews />
</template>

<script setup lang="ts">
import { HomeData } from '@/widgets/home/data';
import { HomeFeatures } from '@/widgets/home/features';
import { HomeNews } from '@/widgets/home/news';
import { HomePartners } from '@/widgets/home/partners';
import { HomeRelations } from '@/widgets/home/relations';
import { HomeReviews } from '@/widgets/home/reviews';
import { HomeStrength } from '@/widgets/home/strength';
import { HomeTop } from '@/widgets/home/top';
</script>
