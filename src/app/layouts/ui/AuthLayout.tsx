import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/shared"

export const AuthLayout = () => {
  const { isAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
  }, [isAuth, location, navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}
