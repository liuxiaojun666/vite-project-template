import { RouteRecordRaw } from 'vue-router'

interface FileType {
  [key: string]: RouteRecordRaw[]
}
const modulesFiles: Record<string, FileType> = import.meta.globEager('./constantModules/**/*.ts')
const constantRoutes: RouteRecordRaw[] = []
for (const key in modulesFiles) {
  constantRoutes.push(...modulesFiles[key].default)
}

export default constantRoutes
