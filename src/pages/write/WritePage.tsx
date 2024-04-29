import { useEffect } from "react"
import { useAppDispatch } from "@/shared"
import { setVisibleHeader } from "@/entities"

import { PostRecipe } from "@/features/recipes/ui/PostRecipe/PostRecipe";

const WritePage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setVisibleHeader(false))
    return () => {
      dispatch(setVisibleHeader(true))
    }
  }, [dispatch])

  return (
    <section className="container overflow-hidden h-full top-1">
      <PostRecipe />
    </section>
  )
}

export default WritePage
