import { TRecipe } from "../../types"

export type TPostRecipe = {
  data?: TRecipe;
  onPublic: (value: TRecipe) => void
  loading: boolean
}
