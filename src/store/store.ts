import { configureStore } from '@reduxjs/toolkit'
import { searchInputSlice } from './slices/searchInputSlice'
import { searchSlice } from './slices/searchSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
    searchInputSlice: searchInputSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export default store
