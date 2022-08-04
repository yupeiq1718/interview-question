import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/options-one',
    name: 'OptionsOne',
    component: () => import('@/views/OptionsOne.vue')
  },
  {
    path: '/composition-one',
    name: 'CompositionOne',
    component: () => import('@/views/CompositionOne.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
