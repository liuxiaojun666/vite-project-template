import { RouteRecordRaw } from 'vue-router'

interface FileType {
  [key: string]: RouteRecordRaw[]
}
const modulesFiles: Record<string, FileType> = import.meta.globEager('./constantModules/**/*.ts')
const constantRoutes: RouteRecordRaw[] = []
for (const key in modulesFiles) {
  constantRoutes.push(...modulesFiles[key].default)
}

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
  ...constantRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'page404',
    component: () => import('../views/404/index.vue')
  }
]

export default routes
