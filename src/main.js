import '@/css/app.css'
import 'animate.css'


import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import VueSidebarMenu from 'vue-sidebar-menu'

const app = createApp(App)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})
app.use(VueSidebarMenu)

app.mount('#app')
