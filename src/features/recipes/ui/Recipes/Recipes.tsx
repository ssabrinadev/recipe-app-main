import { useGetRecipes } from "@/entities"
import { getFilters } from "@/entities/filters/slice"
import { RecipeListUI } from "@/entities/recipes/ui"
import { Spinner, useAppSelector } from "@/shared"
import { useParams } from "react-router-dom"

export const Recipes = () => {
  const params = useParams()
  const filters = useAppSelector(getFilters)
  const { data = [], isLoading } = useGetRecipes({ ...params, ...filters })

  return (
    <div className="py-5">
      {isLoading ? <Spinner /> : <RecipeListUI data={data} />}
    </div>
  )
}
