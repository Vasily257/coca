// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@nuxtjs/eslint-module', { lintOnStart: false }]],
  css: ['./assets/css/fonts.css', './assets/css/colors.css', './assets/css/main.css']
})
