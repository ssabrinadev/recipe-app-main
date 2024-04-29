export type TAuthResponse = {
  token: string
  data: TAuthData
}

export type TAuthData = {
  id: number
  name: string
  surname: string
  email: string
  createdAt: string | Date
}
