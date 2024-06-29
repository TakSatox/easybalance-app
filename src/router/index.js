import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/auth'
import { routes } from '@/router/routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
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
