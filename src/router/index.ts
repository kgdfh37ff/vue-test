import { createRouter, createWebHistory } from 'vue-router'
import ButtonV from '../views/learning/Button.vue'
import HomeVue from '@/views/learning/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue,
      redirect:'/page1',
      children:[
      {
        path:'/page1',
        component:() => import ('../views/learning/Page1.vue')
      },
      {
        path:'/page2',
        component:() => import ('../views/learning/Page2.vue')
      }
    ]
    },
    {
      path: '/test1',
      name: 'test1',
      component: ButtonV
    }
    
  ]
})

export default router
