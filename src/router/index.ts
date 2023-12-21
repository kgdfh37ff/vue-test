import { createRouter, createWebHistory } from 'vue-router'
import ButtonV from '../views/learning/Button.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ButtonV
    }
    
  ]
})

export default router
