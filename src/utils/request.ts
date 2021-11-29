import useUserStore from '@/store/modules/userStore'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const userStore = useUserStore()
  config.headers = config.headers || {}
  config.headers.Token = userStore.token
  return config
}, (err: Error) => {
  return Promise.reject(err)
})

instance.interceptors.response.use((response: AxiosResponse) => {
  const res = response.data || {}
  if (res.code === 200 || res.code === 0) return response
  if (res.code === 10001 || (res.code === 10101 || res.code === 1100)) {
    useUserStore().logout()
    return response
  } else return Promise.reject(res)
}, (err: any) => {
  return Promise.reject(err)
})

interface ResponseData<T> {
  status: number
  msg: string,
  data: T
}

export default <T>(config: AxiosRequestConfig) => {
  return instance(config)
    .then(res => [null, res.data as ResponseData<T>])
    .catch(err => [err, null])
}
