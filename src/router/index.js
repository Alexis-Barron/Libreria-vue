import { createRouter, createWebHistory } from 'vue-router'

import LibrosView from '../views/LibrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: LibrosView, 
    },
    {
      path: '/NuevoLibro', 
      name: 'NuevoLibro',
      component: () => import('../views/NuevoLibroview.vue'), 
    },
    {
      path: '/editarLibro/:id', 
      name: 'editarLibro',
      component: () => import('../views/EditarLibroView.vue'), 
    }
  ]
})

export default router
