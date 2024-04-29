import { FC } from "react"
import { RecipeItemUI } from "."
import { TRecipeProps } from "./types"

export const RecipeListUI: FC<TRecipeProps> = ({ data, editable }) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data.map((recipe) => <RecipeItemUI key={recipe.id} {...recipe} editable={editable} />)}
    </div>
  )
}
