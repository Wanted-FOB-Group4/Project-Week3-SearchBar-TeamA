import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchWord, recommendsCount, setSearchWord, ISearchState } from 'store/slices/searchSlice'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'
import Banner from 'components/Banner'
import { ISearchInputState, searchInput, setSearchInputValue } from 'store/slices/searchInputSlice'

const SearchPage = () => {
  const dispatch = useDispatch()
  const inputValue = useSelector(searchInput)
  const keyword = useSelector(searchWord)
  const count = useSelector(recommendsCount)
  const [keywordIndex, setKeywordIndex] = useState(-1)

  const handleKeyUp = (e: { key: string }) => {
    if (e.key === 'Process') {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: inputValue } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: inputValue } as ISearchInputState))
      return
    }

    if (keyword === '') return

    if (e.key === 'Backspace') {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: inputValue } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: inputValue } as ISearchInputState))
      return
    }

    if (e.key === 'ArrowDown') {
      if (keywordIndex > count - 2) {
        setKeywordIndex(0)
        return
      }

      setKeywordIndex((prevState) => prevState + 1)
      return
    }

    if (e.key === 'ArrowUp') {
      if (keywordIndex <= 0) {
        setKeywordIndex(count - 1)
        return
      }

      setKeywordIndex((prevState) => prevState - 1)
      return
    }

    if (e.key === 'Escape') {
      setKeywordIndex(-1)
      dispatch(setSearchWord({ keyword: '' } as ISearchState))
      dispatch(setSearchInputValue({ searchInputValue: '' } as ISearchInputState))
    }
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.description}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar onKeyUp={handleKeyUp} />
      <KeywordRecommends keywordIndex={keywordIndex} />
      <Banner />
    </section>
  )
}

export default SearchPage
