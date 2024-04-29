import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { userSlice, editorSlice } from "@/entities"
import { apiService } from "@/shared"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterSlice } from "@/entities/filters/slice"

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['filtes'],
}

const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [editorSlice.reducerPath]: editorSlice.reducer,
  [filterSlice.reducerPath]: filterSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiService.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
