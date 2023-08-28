// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: false },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  }
})
