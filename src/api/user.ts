import request from '@/utils/request'
import { ILoginRequestData, ILoginResponseData } from './user.type'

export function login (data: ILoginRequestData) {
  return request<ILoginResponseData>({
    method: 'POST',
    url: '/login',
    data
  })
}
