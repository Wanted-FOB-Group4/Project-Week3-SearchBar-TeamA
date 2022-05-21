import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { searchWord, recommendsCount, setSearchWord, ISearchState } from 'store/slices/searchSlice'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommendList'

import styles from './SearchPage.module.scss'
import Banner from 'components/Banner'
import { searchInput } from 'store/slices/searchInputSlice'

const SearchPage = () => {
  const dispatch = useDispatch()
  const inputValue = useSelector(searchInput)
  const keyword = useSelector(searchWord)
  const count = useSelector(recommendsCount)
  const [keywordIndex, setKeywordIndex] = useState(-1)

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Process') {
      setKeywordIndex(-1)
    }
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Escape') {
      dispatch(setSearchWord({ keyword: inputValue } as ISearchState))
    }
    if (keyword !== '') {
      switch (e.key) {
        case 'ArrowDown':
          if (keywordIndex > count - 2) {
            setKeywordIndex(0)
            break
          }

          setKeywordIndex((prevState) => prevState + 1)
          break

        case 'ArrowUp':
          if (keywordIndex <= 0) {
            setKeywordIndex(count - 1)
            break
          }

          setKeywordIndex((prevState) => prevState - 1)
          break

        case 'Escape':
          setKeywordIndex(-1)
          break
      }
    }
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.description}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar onKeyPress={handleKeyPress} />
      <KeywordRecommends keywordIndex={keywordIndex} />
      <Banner />
    </section>
  )
}

export default SearchPage
