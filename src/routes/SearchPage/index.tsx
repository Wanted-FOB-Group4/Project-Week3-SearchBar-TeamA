import { useEffect, useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { IResultDataList } from 'types/search'
import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { searchToggle, ISearchState, setSearchWord } from 'store/slices/searchSlice'

const SearchPage = () => {
  const queryClient = new QueryClient()
  const dispatch = useDispatch()
  const isOpen = useSelector(searchToggle)

  const [keywordIndex, setKeywordIndex] = useState(-1)
  const [target, setTarget] = useState<any>()

  const resultDataList: IResultDataList[] = [
    { name: "Klatskin's tumor", id: 125 },
    { name: '간세포암', id: 133 },
    { name: '갑상선암종', id: 187 },
    { name: '고환암', id: 335 },
    { name: '뼈암', id: 375 },
    { name: '구강암', id: 445 },
    { name: '치은암', id: 449 },
    { name: '기저세포상피종', id: 642 },
  ]

  const handleKeyDown = (e: KeyboardEvent) => {
    if (resultDataList.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setKeywordIndex((prevState) => prevState + 1)
          if (target.current?.childElementCount === keywordIndex + 1) setKeywordIndex(0)
          break
        case 'ArrowUp':
          setKeywordIndex((prevState) => prevState - 1)
          if (keywordIndex <= 0) {
            // resultDataList([])
            setKeywordIndex(-1)
          }
          break
        case 'Escape':
          setKeywordIndex(-1)
          // resultDataList([])
          break
      }
    }
  }

  useEffect(() => {
    dispatch(setSearchWord({ keyword: target?.children[keywordIndex]?.innerText } as ISearchState))
  }, [dispatch, keywordIndex, target?.children])

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
        <QueryClientProvider client={queryClient}>
          <SearchBar handleKeyDown={handleKeyDown} />
          {isOpen && (
            <KeywordRecommends resultDataList={resultDataList} keywordIndex={keywordIndex} setTarget={setTarget} />
          )}
        </QueryClientProvider>
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
