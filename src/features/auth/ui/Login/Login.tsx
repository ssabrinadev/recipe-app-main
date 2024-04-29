import type { SubmitHandler } from "react-hook-form"
import { LoginUI, TLoginForm, useLogin } from "@/entities"
import { useAuth } from "@/shared"

export const Login = () => {
  const [login, { isLoading }]  = useLogin()
  const { setUser } = useAuth()

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    try {
      const response = await login(data)
      if ('data' in response) {
        setUser(response.data)
      }
    } catch(e) {
      console.dir(e)
    }
  }

  return (
    <LoginUI onSubmit={onSubmit} loading={isLoading} />
  )
}
