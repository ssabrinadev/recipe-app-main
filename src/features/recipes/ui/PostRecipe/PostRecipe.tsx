import { TRecipe, usePostRecipe, useUploadRecipeFile } from "@/entities"
import { PostRecipeUI } from "@/entities/recipes/ui"
import { useNavigate } from "react-router-dom"

export const PostRecipe = () => {
  const [post, { isLoading: recipeLoading }] = usePostRecipe()
  const [upload, { isLoading: uplLoading }] = useUploadRecipeFile()
  const navigate = useNavigate()

  const onPost = async (data: TRecipe) => {
    try {
      const formData = new FormData();
      const { file, ...recipe } = data

      if (!file) {
        const response = await post(recipe)
        if (!('data' in response)) {
          return
        }
        
        navigate('/my-recipes')
        return
      }

      formData.append('file', file)
      const responseUpl = await upload(formData)
      
      if (!('data' in responseUpl)) {
        return
      }
      
      const response = await post({ ...recipe, imgPath: responseUpl.data.url })
      if (!('data' in response)) {
        return
      }
      
      navigate('/my-recipes')

    } catch (e) {
      console.dir(e)
    }
  }

  return (
    <PostRecipeUI onPublic={onPost} loading={recipeLoading ?? uplLoading} />
  )
}
