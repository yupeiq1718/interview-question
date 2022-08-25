import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('@/views/CompositionPage.vue')
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import('@/views/OptionsPage.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
