import { FC } from "react"
import { TRecipe } from "../.."
import { formatDMY } from "@/shared"

export const RecipeShowUI: FC<TRecipe> = ({ name, description, imgPath, createdAt }) => {
  return (
    <div className="flex flex-col">
      <img src={imgPath} alt="recipe" className="object-cover rounded-2xl w-full h-[300px]" />
      <h1 className="text-4xl font-bold mt-5 mb-2">{name}</h1>
      <h2 className="text-sm text-gray-500 font-medium mb-4">{formatDMY(createdAt)}</h2>
      <div className="preview" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}
