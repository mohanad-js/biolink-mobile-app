import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainlayout',
      component: MainLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/profile-settings',
          name: 'profile-settings',
          component: () => import('../views/Profile/ProfileSettingsView.vue')
        },
        {
          path: '/store',
          name: 'store',
          component: () => import('../views/Store/StoreView.vue')
        },
        {
          path: '/services',
          name: 'services',
          component: () => import('../views/Services/ServicesView.vue'),
          children: [
            {
              path: '/services/services-tab',
              name: 'services-tab',
              component: () => import('../views/Services/Tabs/ServicesTabView.vue')
            },
            {
              path: '/services/booking-services',
              name: 'booking-services',
              component: () => import('../views/Services/Tabs/BookingServicesTabView.vue')
            },
            {
              path: '/services/archive-services',
              name: 'archive-services',
              component: () => import('../views/Services/Tabs/ArchiveServicesTabView.vue')
            }
          ]
        },
        {
          path: '/maintenances',
          name: '/maintenances',
          component: () => import('../views/Maintenance/MaintenanceView.vue')
        }
      ]
    },

    {
      path: '/onbording',
      name: 'onbording',
      component: () => import('../views/OnBordingView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../views/Auth/SignInView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/Auth/SignUpView.vue')
    },
    {
      path: '/forget-password"',
      name: '/forget-password"',
      component: () => import('../views/Auth/ForgetPasswordView.vue')
    }
  ]
})

export default router
