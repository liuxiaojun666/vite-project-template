import { defineStore } from 'pinia'
import { COUNTER_STORE } from '../types'

const useStore = defineStore(COUNTER_STORE, {
  state: () => {
    return {
      counter: 0
    }
  }
})

export default useStore
