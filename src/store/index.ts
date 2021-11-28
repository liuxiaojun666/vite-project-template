import { createPinia } from 'pinia'
import persistedstate from './persistedstate'

const pinia = createPinia()
pinia.use(persistedstate({
  ids: ['user_store']
}))

export default pinia
