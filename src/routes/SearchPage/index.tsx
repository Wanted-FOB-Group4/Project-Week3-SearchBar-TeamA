import { useState } from 'react'

import SearchBar from 'components/SearchBar'

import styles from './SearchPage.module.scss'

const SearchPage = () => {
  const [keyword, setKeyword] = useState('')

  return (
    <>
      <header className={styles.head}>
        <p className={styles.title}>한국임상정보</p>
        <nav className={styles.navigation}>
          <div className={styles.navigationBtn}>소식받기</div>
          <div className={styles.navigationBtn}>제휴/문의</div>
        </nav>
      </header>
      <section className={styles.section}>
        <p className={styles.description}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </p>
        <SearchBar keyword={keyword} setKeyword={setKeyword} />
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
