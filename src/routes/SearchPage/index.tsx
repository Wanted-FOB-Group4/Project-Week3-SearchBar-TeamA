import { useState } from 'react'
import { useSelector } from 'react-redux'

import { searchWord, recommendsCount } from 'store/slices/searchSlice'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'
import Banner from 'components/Banner'

const SearchPage = () => {
  const keyword = useSelector(searchWord)
  const count = useSelector(recommendsCount)
  const [keywordIndex, setKeywordIndex] = useState(-1)

  const handleKeyPress = (e: { key: string }) => {
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
      <SearchBar />
      <KeywordRecommends />
      <Banner />
    </section>
  )
}

export default SearchPage
