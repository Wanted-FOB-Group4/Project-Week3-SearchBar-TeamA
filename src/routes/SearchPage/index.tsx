import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchWord, ISearchState } from 'store/slices/searchSlice'
import { ISearchInputState, setSearchInputValue } from 'store/slices/searchInputSlice'
import SearchBar from 'components/SearchBar'
import Banner from 'components/Banner'
import KeywordRecommends from 'components/KeywordRecommendList'

import styles from './SearchPage.module.scss'

const SearchPage = () => {
  const dispatch = useDispatch()
  const [keywordIndex, setKeywordIndex] = useState(-1)

  useEffect(() => {
    dispatch(setSearchInputValue({ searchInputValue: '' } as ISearchInputState))
    dispatch(setSearchWord({ keyword: '' } as ISearchState))
  }, [dispatch])

  return (
    <section className={styles.section}>
      <h1 className={styles.description}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar keywordIndex={keywordIndex} setKeywordIndex={setKeywordIndex} />
      <KeywordRecommends keywordIndex={keywordIndex} />
      <Banner />
    </section>
  )
}

export default SearchPage
