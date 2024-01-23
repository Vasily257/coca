import { computed } from 'vue';
import { useRoute, navigateTo } from 'nuxt/app';
import { PageRoute } from '@/shared/lib';

/** Хук для управления страницами */
const usePage = () => {
  /** Настройки текущего маршрута */
  const route = useRoute();

  /** Открыта ли домашняя страница */
  const isHomePage = computed(() => route.path === PageRoute.Home);

  /** Перейти на домашнюю страницу */
  const goToHomePage = async () => {
    await navigateTo(PageRoute.Home);
  };

  return {
    isHomePage,
    goToHomePage,
  };
};

export { usePage };
