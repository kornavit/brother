import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        layout: "Main"
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta:{
        layout: "Main"
      }
    },
    {
      path: '/from',
      name: 'from',
      component: () => import('../views/FormView.vue'),
      meta:{
        layout:"Main"
      }
    }
  ]
})

export default router
