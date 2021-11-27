import { RouteRecordRaw } from 'vue-router'

interface FileType {
  [key: string]: RouteRecordRaw[]
}
const modulesFiles: Record<string, FileType> = import.meta.globEager('./asyncModules/**/*.ts')
const asyncRoutes: RouteRecordRaw[] = []
for (const key in modulesFiles) {
  asyncRoutes.push(...modulesFiles[key].default)
}

export default asyncRoutes
