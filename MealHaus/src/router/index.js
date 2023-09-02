import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
    path: '/start',
    name: 'start',
    component: () => import('../views/StartView.vue')
    },
    {
    path: '/meals',
    name: 'meals',
    component: () => import('../views/MealsView.vue')
    },
    {
    path: '/faq',
    name: 'faq',
    component: () => import('../views/FaqView.vue')
    }
  ]
})

export default router
