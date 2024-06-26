import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/auth'
import HomeView from '@/views/HomeView.vue'
import GoogleLoginView from '@/views/GoogleLoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

router.beforeEach(async (to) => {
  const authenticated = await isAuthenticated()

  if(to.name !== 'login' && !authenticated) {
    return { name: 'login' }
  }

  if(to.name === 'login' &&  authenticated) {
    return { name: 'home' }
  }
})

export default router
