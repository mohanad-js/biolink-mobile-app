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
          path: '/profile/transactions-history',
          name: 'Transactions History',
          component: () => import('../views/Profile/TransactionsHistoryView.vue')
        },
        {
          path: '/profile/edit-profile/:id',
          name: 'Edit Profile',
          component: () => import('../views/Profile/EditProfileView.vue')
        },
        {
          path: '/store',
          name: 'Store',
          component: () => import('../views/Store/StoreView.vue')
        },
    
        {
          path: '/services',
          name: 'services',
          component: () => import('../views/Services/ServicesView.vue'),
          children: [
            {
              path: '/services/services-tab',
              name: 'Services List',
              component: () => import('../views/Services/Tabs/ServicesTabView.vue')
            },
            {
              path: '/services/booking-services',
              name: 'Booking services',
              component: () => import('../views/Services/Tabs/BookingServicesTabView.vue')
            },
           
            {
              path: '/services/archive-services',
              name: 'Archive services',
              component: () => import('../views/Services/Tabs/ArchiveServicesTabView.vue')
            }
          ]
        },
        {
          path: '/maintenances',
          name: 'maintenances',
          component: () => import('../views/Maintenance/MaintenanceView.vue'),
          children: [
            {
              path:'/maintenances/completed',
              name: 'completed orders',
              component: () => import('../views/Maintenance/CompletedMaintenancesView.vue')
            },
            {
              path:'/maintenances/new',
              name: 'new orders',
              component: () => import('../views/Maintenance/NewMaintenanceOrders.vue')
            },
            {
              path:'/maintenances/canceled',
              name: 'canceled orders',
              component: () => import('../views/Maintenance/CanceledMaintenanceOrders.vue')
            },
            {
              path: '/maintenances/active',
              name: 'active orders',
              component: () => import('../views/Maintenance/ActiveMaintenancesOrdersView.vue')
            },

    
          ],

        },
            
        {
          path: '/maintenances/order/:id',
          props: true,
          name: 'order details',
          component: () => import('../views/Maintenance/MaintenanceOrderDetails.vue')
        },
        {
          path: '/maintenances/order/:id/update',
          props: true,
          name: 'update maintenance order',
          component: () => import('../views/Maintenance/UpdateMaintenanceOrder.vue')
        },
        {
          path:'/maintenances/order/new',
          name:'new maintenance order',
          component: ()=> import('../views/Maintenance/NewMaintenanceOrder.vue')
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
    },
    {
      path: '/services/services-profile',
      name: 'profile-services',
      component: () => import('../views/Services/ServicesProfile.vue')
    },
  ]
})

export default router
