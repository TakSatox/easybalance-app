  import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

import HomeDashboard from '@/components/HomeDashboard.vue'
import HomeTransaction from '@/components/HomeTransaction.vue'
import HomePending from '@/components/HomePending.vue'
import HomeRecordTransaction from '@/components/HomeRecordTransaction.vue'


export const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'dashboard',
          component: HomeDashboard
        },
        {
          path: 'transactions',
          component: HomeTransaction
        },
        {
          path: 'pending',
          component: HomePending
        },
        {
          path: 'record-transactions',
          component: HomeRecordTransaction
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]




































