import { defineStore } from 'pinia'
import { COUNTER_STORE } from '../types'

const useCounterStore = defineStore(COUNTER_STORE, {
  state: () => {
    return {
      counter: 0
    }
  }
})

export default useCounterStore
