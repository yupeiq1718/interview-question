import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/question-one',
    name: 'QuestionOne',
    component: () => import('@/views/QuestionOne.vue')
  },
  {
    path: '/question-two',
    name: 'QuestionTwo',
    component: () => import('@/views/QuestionTwo.vue')
  },
  {
    path: '/question-three',
    name: 'QuestionThree',
    component: () => import('@/views/QuestionThree.vue')
  },
  {
    path: '/question-four',
    name: 'QuestionFour',
    component: () => import('@/views/QuestionFour.vue')
  },
  {
    path: '/question-five',
    name: 'QuestionFive',
    component: () => import('@/views/QuestionFive.vue')
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
