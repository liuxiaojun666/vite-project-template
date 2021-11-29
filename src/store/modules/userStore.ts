import { ILoginRequestData } from '@/api/user.type'
// import { login } from '@/api/user'
import { addAsyncRoutes } from '@/router/permisstion'
import { defineStore } from 'pinia'
import { USER_STORE } from '../types'
import { useRouter } from 'vue-router'

const useUserStore = defineStore(USER_STORE, {
  state: () => {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async login (data: ILoginRequestData) {
      // const [err, res] = await login(data)
      // if (err) return console.error(err)
      // this.token = res.data.token
      this.token = 'ok'
      addAsyncRoutes()
      return true
    },
    logout () {
      this.$reset()
      useRouter().push({ name: 'login' })
    }
  }
})

export default useUserStore
