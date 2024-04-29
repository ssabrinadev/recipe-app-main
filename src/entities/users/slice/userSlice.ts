import { TAuthResponse } from "@/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  user?: TAuthResponse
}

const initialState: TInitialState = {
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  selectors: {
    getUser: (state) => state.user,
  },
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TAuthResponse | undefined>) {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
})

export const { setUser } = userSlice.actions;
export const { getUser } = userSlice.selectors;