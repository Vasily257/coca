import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  alias: {
    '@': resolve(__dirname, './src'),
  },
  imports: {
    autoImport: false,
  },
});
