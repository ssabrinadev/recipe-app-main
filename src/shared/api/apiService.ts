import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, getAuth } from "..";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["recipes"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const { isAuth, token } = getAuth()
      if (isAuth) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: () => ({}),
});
