import { PiniaPluginContext } from 'pinia'

export default (options: {
  storageType?: 'sessionStorage' | 'localStorage' | 'cookie',
  ids: string[]
}) => ({ store }: PiniaPluginContext) => {
  const { ids } = options
  if (!ids.includes(store.$id)) return
  try {
    const s = sessionStorage.getItem(store.$id)
    if (s) store.$state = JSON.parse(s)
  } catch (error) {
    console.error(error)
  }
  store.$subscribe((_, state) => {
    sessionStorage.setItem(store.$id, JSON.stringify(state))
  })
}
