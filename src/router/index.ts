import { createRouter, createWebHistory } from 'vue-router'

import indexPage from '../views/indexPage.vue'
import ProductPage from '@/views/productPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexPage ,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage ,
    }
  ],
})

export default router
