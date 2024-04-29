import { lazy } from "react"
import { AuthLayout } from "@/app/layouts"
import type { RouteObject } from "react-router-dom"

const AuthPage = lazy(() => import("@/pages/auth"))
const RegistrationPage = lazy(() => import("@/pages/register"))

export const publicRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <AuthPage />
      },
      {
        path: 'register',
        element: <RegistrationPage />
      },
    ],
  }
]
