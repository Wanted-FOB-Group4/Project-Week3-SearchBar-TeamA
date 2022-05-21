import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../types/search.d'

export interface ISearchInputState {
  searchInputValue: string | undefined
}

const initialState: ISearchInputState = {
  searchInputValue: '',
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    setSearchInputValue(state, action: PayloadAction<ISearchInputState>) {
      // 업데이트 되는 State 를 return 해준다.
      return { ...state, searchInputValue: action.payload.searchInputValue }
    },
  },
})

export const searchInput = (state: RootState) => state.searchInputSlice.searchInputValue

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { setSearchInputValue } = searchInputSlice.actions
