import Nosotros from '../views/Nosotros.vue'
import CategoryPage from '../views/CategoryPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/hamburguesas' },
  { path: '/nosotros', component: Nosotros },
  { path: '/hamburguesas', component: CategoryPage },
  { path: '/perros', component: CategoryPage },
  { path: '/pizzas', component: CategoryPage },
  { path: '/bebidas', component: CategoryPage },
  { path: '/postres', component: CategoryPage },
  { path: '/promociones', component: CategoryPage },
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})