import { USER_STORE } from './types'
import { createPinia } from 'pinia'
import persistedstate from './persistedstate'

const pinia = createPinia()
pinia.use(persistedstate({
  ids: [USER_STORE]
}))

export default pinia
