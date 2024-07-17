// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    googleClientId: process.env['NUXT_GOOGLE_CLIENT_ID'],
  },
  

  // Define it inside runtime config when the Tanuki pull request is merged into plugin main branch
  // Defining it inside runtimeConfig will allow the use of environment variables in production enviroment
  // link: https://github.com/wavezync/nuxt-vue3-google-signin/pull/25
  googleSignIn: {
    clientId: process.env['NUXT_GOOGLE_CLIENT_ID'],
  }
  
  
  
})
