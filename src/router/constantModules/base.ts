import { RouteRecordRaw } from 'vue-router'
import router from '..'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: () => {
      if (router.hasRoute('home')) return ({ name: 'home' })
      else return ({ name: 'login' })
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page404',
    component: () => import('@/views/404/index.vue')
  }
]

export default routes
