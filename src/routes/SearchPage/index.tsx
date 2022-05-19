import SearchBar from 'components/SearchBar'
import KeywordRecommends from 'components/KeywordRecommends'

import styles from './SearchPage.module.scss'

const SearchPage = () => {
  // const [keywordIndex, setKeywordIndex] = useState(-1)
  // const [target, setTarget] = useState<any>()

  // TODO: handleKeyDown 함수 위치 조정 및 data 의존성 제거
  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (data) {
  //     switch (e.key) {
  //       case 'ArrowDown':
  //         setKeywordIndex((prevState) => prevState + 1)
  //         if (target.current?.childElementCount === keywordIndex + 1) setKeywordIndex(0)
  //         break
  //       case 'ArrowUp':
  //         setKeywordIndex((prevState) => prevState - 1)
  //         if (keywordIndex <= 0) {
  //           // resultDataList([])
  //           setKeywordIndex(-1)
  //         }
  //         break
  //       case 'Escape':
  //         setKeywordIndex(-1)
  //         // resultDataList([])
  //         break
  //     }
  //   }
  // }

  // memo: 강의 코드리뷰에서 나왔던 스타일로 리팩토링 했습니다.
  // TODO: 스타일 작업 필요

  // memo: 아래 코드가 data의 status를 변경시킵니다.
  // useEffect(() => {
  //   dispatch(setSearchWord({ keyword: target?.children[keywordIndex]?.innerText } as ISearchState))
  // }, [dispatch, keywordIndex, target?.children])

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
        <SearchBar />
        <KeywordRecommends />
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
