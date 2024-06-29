import HomeView from '@/views/HomeView.vue'
import GoogleLoginView from '@/views/GoogleLoginView.vue'


export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: GoogleLoginView
    }
  ]