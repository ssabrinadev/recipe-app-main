import { lazy } from "react"
import { MainLayout } from "@/app/layouts"
import type { RouteObject } from "react-router-dom"

const WritePage = lazy(() => import("@/pages/write/WritePage"))
const WriteIdPage = lazy(() => import("@/pages/write/WriteIdPage"))
const MyRecipesPage = lazy(() => import("@/pages/my-recipes"))
const RecipesPage = lazy(() => import("@/pages/recipes/RecipesPage"))
const RecipesIdPage = lazy(() => import("@/pages/recipes/RecipesIdPage"))

export const privateRoutes: RouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/write',
        element: <WritePage />
      },
      {
        path: '/write/:id',
        element: <WriteIdPage />
      },
      {
        path: '/my-recipes',
        element: <MyRecipesPage />
      },
      {
        path: '/recipes',
        element: <RecipesPage />
      },
      {
        path: '/recipes/:id',
        element: <RecipesIdPage />
      },
    ],
  }
]
