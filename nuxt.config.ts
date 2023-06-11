import { resolve } from "path";

export default defineNuxtConfig({
  // modules dependencies
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  // plugins dependencies
  plugins: [
    '~/plugins/axios/index.ts'
  ],
  // alias config
  alias: {
      "@components": resolve(__dirname, './src/components'),
      "@pages": resolve(__dirname, './src/pages'),  
      "@assets": resolve(__dirname, './public/assets'),
      "@stores": resolve(__dirname, './src/stores'),
      "@plugins": resolve(__dirname, './src/plugins'),
  },
  // active dev toos
  devtools: { enabled: true },
  // src dir
  srcDir: 'src/',
  // tailwind css
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css
  css: [
    resolve(__dirname, './public/assets/css/main.scss')
  ],
  // scss global variables config
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@assets/css/variable/index.scss" as *;'
        }
      }
    }
  },
  // i18n locale config
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
          code: 'en-US',
          iso: 'en-US',
          name: 'ENGLISH(US)',
          file: 'en-US.ts',
      },
      {
          code: 'vi',
          iso: 'vi',
          name: 'Tiếng Việt',
          file: 'vi.ts',
      }
    ],
    defaultLocale: 'vi',
  }
})
