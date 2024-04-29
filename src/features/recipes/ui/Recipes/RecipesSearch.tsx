import { useFilterRecipes } from "@/entities"
import { getFilters } from "@/entities/filters/slice"
import { RecipeListUI } from "@/entities/recipes/ui"
import { Spinner, useAppDispatch, useAppSelector } from "@/shared"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const RecipesSearch = () => {
  const filters = useAppSelector(getFilters)
  const params = useParams()
  const dispatch = useAppDispatch()
  const [trigger, { data = [], isLoading }] = useFilterRecipes({})

  useEffect(() => {

    const fetchRecipes = async () => {
      await trigger({ ...params })
    }

    fetchRecipes()
  }, [filters, dispatch, trigger, params])

  return (
    <div className="py-5">
      {isLoading ? <Spinner /> : <RecipeListUI data={data} />}
    </div>
  )
}
