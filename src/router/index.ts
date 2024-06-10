import { createRouter, createWebHistory } from 'vue-router'
import ButtonV from '../views/learning/Button.vue'
import HomeVue from '@/views/learning/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    }
    
  ]
})

export default router
