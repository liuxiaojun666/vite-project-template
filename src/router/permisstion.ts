import { RouteRecordName, RouteRecordRaw } from 'vue-router'
import router, { asyncRoutes } from '@/router'

const lazyRoutes: RouteRecordRaw[] = []
const parentRouteNameKey = Symbol('RouteRecordNameKey')
export function addAsyncRoutes (routes: RouteRecordRaw[] = asyncRoutes, parentRouteName?: RouteRecordName) {
  routes.forEach(route => {
    if (route.children?.length) {
      router.addRoute({ ...route, children: [] } as RouteRecordRaw)
      addAsyncRoutes(route.children, route.name)
    }
    if (route.meta?.lazy) {
      route.meta[parentRouteNameKey] = parentRouteName
      return lazyRoutes.push(route)
    }
    if (router.hasRoute(route.name as RouteRecordName)) return
    parentRouteName ? router.addRoute(parentRouteName, route) : router.addRoute(route)
  })
}

export function addLazyRoute (routeName: RouteRecordName) {
  if (router.hasRoute(routeName)) return
  lazyRoutes.some(route => {
    if (route.name !== routeName) return false
    const parentRouteName = route.meta?.[parentRouteNameKey]
    parentRouteName ? router.addRoute(route) : router.addRoute(route)
    return true
  })
}
