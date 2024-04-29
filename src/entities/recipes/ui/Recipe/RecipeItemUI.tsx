import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Button, formatDMY } from "@/shared"
import type { TRecipeItemProps } from "./types"

export const RecipeItemUI: FC<TRecipeItemProps> = ({ id, name, description, imgPath, createdAt, editable }) => {
  const navigate = useNavigate()
  return (
    <div className="rounded-3xl flex flex-col bg-light border overflow-hidden hover:-translate-y-1 transition relative group">
      <div className="flex-1">
        <img src={imgPath} alt="image" className="object-cover w-full max-h-[234px]" />
      </div>
      <div className="flex flex-1 flex-col gap-14 px-6 pt-6 pb-4">
        <div className="flex-1">
          <h1 className="text-dark text-2xl font-bold mb-3">{name}</h1>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="flex flex-1 justify-between items-center">
          <span>
            {formatDMY(createdAt)}
          </span>
          <Button variant="outline" onClick={() => navigate(`/recipes/${id}`)}>
            Посмотреть рецепт
          </Button>
        </div>
      </div>
      {
        editable && (
          <div className="absolute top-5 right-5 opacity-0 transition group-hover:opacity-100">
            <Button onClick={() => navigate(`/write/${id}`)}>&#9998;</Button>
          </div>
        )
      }
    </div>
  )
}
