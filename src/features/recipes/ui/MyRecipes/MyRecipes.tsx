import { useGetRecipes } from "@/entities"
import { RecipeListUI } from "@/entities/recipes/ui"
import { useAuth } from "@/shared"

export const MyRecipes = () => {
  const { user } = useAuth()
  const { data = [] } = useGetRecipes({ user_id: user?.data?.id || 0 })
  return (
    <section className="container">
      <h1 className="text-4xl my-20">Мои рецепты</h1>
      <RecipeListUI data={data} editable />
    </section>
  )
}
