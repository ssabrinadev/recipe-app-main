import { apiService } from "@/shared";
import { TRecipe } from "..";

export const recipeApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getRecipes: build.query<TRecipe[], Record<string, any>>(({
      query: (params) => ({
        url: '/recipes',
        params,
      }),
      providesTags: () => ['recipes']
    })),
    postRecipe: build.mutation<unknown, TRecipe>(({
      query: (body) => ({
        url: '/recipes',
        method: 'POST',
        body
      }),
      invalidatesTags: () => ['recipes']
    })),
    updateRecipe: build.mutation<unknown, TRecipe>(({
      query: (body) => ({
        url: `/recipes/${body.id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: () => ['recipes']
    })),
    uploadRecipeFile: build.mutation<{ url: string }, FormData>(({
      query: (body) => ({
        url: '/uploads',
        method: 'POST',
        body
      }),
      invalidatesTags: () => ['recipes']
    }))
  }),
})

export const useGetRecipes = recipeApi.useGetRecipesQuery
export const useFilterRecipes = recipeApi.useLazyGetRecipesQuery
export const usePostRecipe = recipeApi.usePostRecipeMutation
export const useUpdateRecipe = recipeApi.useUpdateRecipeMutation
export const useUploadRecipeFile = recipeApi.useUploadRecipeFileMutation
