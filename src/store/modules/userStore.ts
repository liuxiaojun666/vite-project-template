import { addAsyncRoutes } from '@/router/permisstion'
import { defineStore } from 'pinia'
import { USER_STORE } from '../types'

const useStore = defineStore(USER_STORE, {
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    login () {
      this.token = 'ok'
      addAsyncRoutes()
    }
  }
})

export default useStore