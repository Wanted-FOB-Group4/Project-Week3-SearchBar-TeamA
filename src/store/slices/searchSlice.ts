import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../types/search.d'

export interface ISearchState {
  keyword: string | undefined
  recommendsCount: number
}

const initialState: ISearchState = {
  keyword: '',
  recommendsCount: 0,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchWord(state, action: PayloadAction<ISearchState>) {
      return { ...state, keyword: action.payload.keyword }
    },
    setRecommendsCount(state, action: PayloadAction<ISearchState>) {
      return { ...state, recommendsCount: action.payload.recommendsCount }
    },
  },
})

export const searchWord = (state: RootState) => state.searchSlice.keyword
export const recommendsCount = (state: RootState) => state.searchSlice.recommendsCount

export const { setSearchWord, setRecommendsCount } = searchSlice.actions
