import { createRouter, createWebHistory } from 'vue-router'
import heroSection from '@/sections/heroSection.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: heroSection,
    }
  ],
})

export default router
