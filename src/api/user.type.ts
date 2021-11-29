export interface ILoginRequestData {
  user_name: string,
  password: string
}

export interface ILoginResponseData {
  token: string,
  count: number
}
