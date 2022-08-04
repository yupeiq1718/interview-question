import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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
  }
]

const options: RouterOptions = {
  history: createWebHistory('/'),
  routes
}

const router: Router = createRouter(options)

export default router
