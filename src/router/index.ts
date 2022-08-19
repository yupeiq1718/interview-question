import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/js-one',
    name: 'JSOne',
    component: () => import('@/views/JSOne.vue')
  },
  {
    path: '/js-two',
    name: 'JSTwo',
    component: () => import('@/views/JSTwo.vue')
  },
  {
    path: '/js-three',
    name: 'JSThree',
    component: () => import('@/views/JSThree.vue')
  },
  {
    path: '/js-four',
    name: 'JSFour',
    component: () => import('@/views/JSFour.vue')
  },
  {
    path: '/css-one',
    name: 'CSSOne',
    component: () => import('@/views/CSSOne.vue')
  },
  {
    path: '/css-two',
    name: 'CSSTwo',
    component: () => import('@/views/CSSTwo.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
