export type TRecipe = {
  id?: number
  name: string
  description: string
  imgPath?: string
  user_id: number
  createdAt: string | Date
  user?: TUser
  file?: File
}

export type TUser = {
  id: number
  name: string
  surname: string
  email: string
  createdAt: string | Date
}
