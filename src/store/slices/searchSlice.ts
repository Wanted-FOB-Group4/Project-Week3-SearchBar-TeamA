import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../types/search.d'

export interface ISearchState {
  keyword: string | undefined
}

const initialState: ISearchState = {
  keyword: '',
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const searchSlice = createSlice({
  name: 'search',
  initialState, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    setSearchWord(state, action: PayloadAction<ISearchState>) {
      // 업데이트 되는 State 를 return 해준다.
      return { keyword: action.payload.keyword }
    },
  },
})

export const searchWord = (state: RootState) => state.searchSlice.keyword

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { setSearchWord } = searchSlice.actions
