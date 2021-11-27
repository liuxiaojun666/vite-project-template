import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constantRoutes'
export { default as asyncRoutes } from './asyncRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export function resetRouter () {
  const newRouter = router
  ;(router as any).matcher = (newRouter as any).matcher
}

export default router
