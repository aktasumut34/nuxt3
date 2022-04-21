import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  builder: 'webpack',
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  buildModules: ['@pinia/nuxt']
});
