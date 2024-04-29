import { TRecipe } from "../..";

export type TRecipeItemProps = TRecipe & {
  editable?: boolean
}

export type TRecipeProps = {
  editable?: boolean
  data: TRecipe[]
}
