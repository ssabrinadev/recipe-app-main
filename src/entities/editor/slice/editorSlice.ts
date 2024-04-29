import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TInitialState } from ".";

const initialState: TInitialState = {
  write: '',
  visibleHeader: true
}

export const editorSlice = createSlice({
  name: 'editor',
  selectors: {
    getWrite: (state) => state.write,
    getVisibleHeader: (state) => state.visibleHeader,
  },
  initialState,
  reducers: {
    setWrite(state, action: PayloadAction<string>) {
      state.write = action.payload
      localStorage.setItem('write', JSON.stringify(state.write))
    },
    setVisibleHeader(state, action: PayloadAction<boolean>) {
      state.visibleHeader = action.payload
    }
  },
})

export const { setWrite, setVisibleHeader } = editorSlice.actions;
export const { getWrite, getVisibleHeader } = editorSlice.selectors;