import { useGetRecipes } from "@/entities"
import { RecipeShowUI } from "@/entities/recipes/ui"
import { Spinner } from "@/shared"
import { useParams } from "react-router-dom"

export const RecipesId = () => {
  const { id } = useParams()
  const { data = [], isLoading } = useGetRecipes({ id })

  return (
    <div className="py-5">
      {isLoading ? <Spinner /> : <RecipeShowUI {...data[0]} />}
    </div>
  )
}
