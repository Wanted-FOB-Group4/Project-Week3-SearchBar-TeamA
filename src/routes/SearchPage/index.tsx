import { useState } from 'react'
import { useSelector } from 'react-redux'

import { searchWord, recommendsCount } from 'store/slices/searchSlice'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'

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
    <>
      <header className={styles.head}>
        <div className={styles.title}>한국임상정보</div>
        <nav className={styles.navigation}>
          <div className={styles.navigationBtn}>소식받기</div>
          <div className={styles.navigationBtn}>제휴/문의</div>
        </nav>
      </header>
      <section className={styles.section}>
        <h1 className={styles.description}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <SearchBar onKeyPress={handleKeyPress} />
        <KeywordRecommends keywordIndex={keywordIndex} />
        <div className={styles.backgroundBottom}>
          <div className={styles.notification}>
            <p className={styles.notificationTxt}>새로운 임상시험이 등록되면 문자로 알려드려요</p>
            <p className={styles.notificationButton}>임상시험 소식받기</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer} />
    </>
  )
}

export default SearchPage
