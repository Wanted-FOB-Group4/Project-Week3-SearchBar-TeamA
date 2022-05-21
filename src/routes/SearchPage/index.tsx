import { useState } from 'react'

import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'
import Banner from 'components/Banner'

const SearchPage = () => {
  const [keywordIndex, setKeywordIndex] = useState(-1)

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
