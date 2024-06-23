// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    '@/assets/css/global.css'
  ],

  modules: [
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    googleClientId: process.env.GOOGLE_CLIENT_ID
  },

  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID
  }
})
