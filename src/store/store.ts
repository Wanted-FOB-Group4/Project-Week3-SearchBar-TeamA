import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from './slices/searchSlice'

const store = configureStore({
  reducer: {
    searchSlice: searchSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export default store
