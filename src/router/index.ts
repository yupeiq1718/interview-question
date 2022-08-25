import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/composition',
    name: 'CompositionPage',
    component: () => import('@/views/CompositionPage.vue')
  },
  {
    path: '/options',
    name: 'OptionsPage',
    component: () => import('@/views/OptionsPage.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
