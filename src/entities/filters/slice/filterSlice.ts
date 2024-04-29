import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TInitialState } from ".";

const initialState: TInitialState = {
  filters: {}
}

export const filterSlice = createSlice({
  name: 'filter',
  selectors: {
    getFilters: (state) => state.filters,
  },
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Record<string, any>>) {
      state.filters = action.payload
    },
  },
})

export const { setFilters } = filterSlice.actions;
export const { getFilters } = filterSlice.selectors;