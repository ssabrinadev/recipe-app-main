import type { SubmitHandler } from "react-hook-form"
import { RegistrationUI, TRegistrationForm, useRegister } from "@/entities"
import { useAuth } from "@/shared"

export const Registration = () => {
  const [register, { isLoading }]  = useRegister()
  const { setUser } = useAuth()

  const onSubmit: SubmitHandler<TRegistrationForm> = async (data) => {
    try {
      const response = await register(data)
      if ('data' in response) {
        setUser(response.data)
      }
    } catch(e) {
      console.dir(e)
    }
  }

  return (
    <RegistrationUI onSubmit={onSubmit} loading={isLoading} />
  )
}
