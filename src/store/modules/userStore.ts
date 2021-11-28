import { addAsyncRoutes } from '@/router/permisstion'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user_store', {
  state: () => {
    return {
      counter: 0,
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

export default useUserStore
