import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { searchWord, recommendsCount, ISearchState, setSearchWord } from 'store/slices/searchSlice'

import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommendList'
import styles from './SearchResultPage.module.scss'

const SearchResultPage = () => {
  const keyword = useSelector(searchWord)
  const count = useSelector(recommendsCount)
  const [keywordIndex, setKeywordIndex] = useState(-1)
  const urlParams = useParams() // 변수 이름 임시 설정
  const dispatch = useDispatch()

  console.log(keyword)

  useEffect(() => {
    dispatch(setSearchWord({ keyword: '' } as ISearchState))
  }, [dispatch])

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Process') {
      setKeywordIndex(-1)
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
    <>
      <header className={styles.header}>
        <div className={styles.keywordForm}>
          <SearchBar onKeyPress={handleKeyPress} />
          <KeywordRecommends keywordIndex={keywordIndex} />
        </div>
      </header>
      <section className={styles.background}>
        {!urlParams.keyword ? (
          <div className={styles.resultMessage}>{urlParams.keyword}에 대한 결과입니다</div>
        ) : (
          <div className={styles.description}>
            <div className={styles.noClinical}>현재 모집 중인 임상 시험이 없습니다.</div>
            <div className={styles.registerAlarm}>
              원하시는 결과가 없나요?
              <br />
              아래 ‘임상시험 소식받기’를 통해 간단한 정보만 입력해주시면 해당 조건에 맞는
              <br /> 새로운 임상시험이 등록 되었을 때 빠르게 알려드리겠습니다.
            </div>
            <div className={styles.alarmBtn}>임상시험 소식받기</div>
          </div>
        )}
      </section>
    </>
  )
}

export default SearchResultPage
