// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    googleClientId: process.env['NUXT_GOOGLE_CLIENT_ID'],
  },
  

  // Define it inside runtime config when the wavezync publish the new version of main in npm registry
  // link: https://github.com/wavezync/nuxt-vue3-google-signin/pull/25
  googleSignIn: {
    clientId: process.env['NUXT_GOOGLE_CLIENT_ID'],
  }
  
  
  
})
