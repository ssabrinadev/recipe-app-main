import { TRecipe, useGetRecipes, useUpdateRecipe, useUploadRecipeFile } from "@/entities"
import { PostRecipeUI } from "@/entities/recipes/ui"
import { useNavigate, useParams } from "react-router-dom"

export const UpdateRecipe = () => {
  const { id = 0 } = useParams()
  const { data = [] } = useGetRecipes({ id })
  const [post, { isLoading: recipeLoading }] = useUpdateRecipe()
  const [upload, { isLoading: uplLoading }] = useUploadRecipeFile()
  const navigate = useNavigate()

  const onPost = async (data: TRecipe) => {
    try {
      const formData = new FormData();
      const { file, ...recipe } = data
      

      if (!file) {
        const response = await post({ ...recipe, id: +id })
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

      
      
      const response = await post({ ...recipe, id: +id, imgPath: responseUpl.data.url })
      if (!('data' in response)) {
        return
      }

      formData.delete('file')
      
      navigate('/my-recipes')

    } catch (e) {
      console.dir(e)
    }
  }

  return (
    <PostRecipeUI onPublic={onPost} loading={recipeLoading ?? uplLoading} data={data[0]} />
  )
}
