import { useEffect } from "react"
import { useAppDispatch } from "@/shared"
import { setVisibleHeader } from "@/entities"
import { UpdateRecipe } from "@/features/recipes/ui/PostRecipe/UpdateRecipe"

const WritePage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setVisibleHeader(false))
    return () => {
      dispatch(setVisibleHeader(true))
    }
  }, [dispatch])

  return (
    <section className="container overflow-hidden h-full">
      <UpdateRecipe />
    </section>
  )
}

export default WritePage
