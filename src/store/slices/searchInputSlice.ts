import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../types/search.d'

export interface ISearchInputState {
  searchInputValue: string | undefined
}

const initialState: ISearchInputState = {
  searchInputValue: '',
}

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState,
  reducers: {
    setSearchInputValue(state, action: PayloadAction<ISearchInputState>) {
      return { ...state, searchInputValue: action.payload.searchInputValue }
    },
  },
})

export const searchInput = (state: RootState) => state.searchInputSlice.searchInputValue

export const { setSearchInputValue } = searchInputSlice.actions
