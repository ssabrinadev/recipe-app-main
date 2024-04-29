import { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAppSelector, useAuth } from "@/shared"
import { Header } from "@/widgets/header/ui/Header"
import { getVisibleHeader } from "@/entities"

const blackListRoute = ['write', 'my-recipes']

export const MainLayout = () => {
  const { isAuth } = useAuth()
  const location = useLocation()
  const visibleHeader = useAppSelector(getVisibleHeader)
  const navigate = useNavigate()

  useEffect(() => {
    const rootLocation = location.pathname.split('/')[1]
    if (!isAuth && blackListRoute.includes(rootLocation)) {
      navigate('/auth/login')
    }
  }, [isAuth, location, navigate])

  return (
    <>
      {visibleHeader && <Header />}
      <main className="h-full">
        <Outlet />
      </main>
    </>
  )
}
