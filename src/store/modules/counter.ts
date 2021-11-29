import { defineStore } from 'pinia'
import { USER_STORE } from '../types'

const useStore = defineStore(USER_STORE, {
  state: () => {
    return {
      counter: 0
    }
  }
})

export default useStore
