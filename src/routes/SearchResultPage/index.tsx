import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommendList'

import styles from './SearchResultPage.module.scss'

const SearchResultPage = () => {
  const [keywordIndex, setKeywordIndex] = useState(-1)
  const dispatch = useDispatch()
  const urlParams = useParams()

  useEffect(() => {
    dispatch(setSearchWord({ keyword: '' } as ISearchState))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.keywordForm}>
        <SearchBar keywordIndex={keywordIndex} setKeywordIndex={setKeywordIndex} />
        <KeywordRecommends keywordIndex={keywordIndex} />
      </div>
      <section className={styles.result}>
        <div className={styles.resultMessage}>
          <span>{urlParams.keyword}</span>에 대한 결과입니다
        </div>
      </section>
    </div>
  )
}

export default SearchResultPage
