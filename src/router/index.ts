import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import aRoutes from './modules/a'

export const asyncRoutes: RouteRecordRaw[] = [
  ...aRoutes
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page404',
    component: () => import('../views/404/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
