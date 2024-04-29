import { apiService } from "@/shared";
import { TAuthResponse, TLoginForm, TRegistrationForm } from "..";

export const authApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<TAuthResponse, TLoginForm>(({
      query: (body) => ({
        url: '/auth',
        method: 'POST',
        body
      }),
    })),
    registerUser: build.mutation<TAuthResponse, TRegistrationForm>(({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body
      }),
    })),

  })
})

export const useLogin = authApi.useLoginUserMutation;
export const useRegister = authApi.useRegisterUserMutation;
