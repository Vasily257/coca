import crypto from 'crypto';
import { resolve, basename } from 'path';
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
  vite: {
    css: {
      modules: {
        generateScopedName: (name, filename, css) => {
          const fullName = basename(filename);
          const componentName = fullName.split('.vue')[0] || '';

          const hash = crypto.createHash('md5').update(css).digest('hex').slice(0, 5);

          return componentName + '__' + name + '__' + hash;
        },
      },
    },
  },
});
