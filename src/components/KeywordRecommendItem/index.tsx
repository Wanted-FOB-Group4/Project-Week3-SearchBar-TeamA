import { useDispatch } from 'react-redux'
import cx from 'classnames'

import { ISearchState, setSearchToggle, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'

interface SearchKeywordRecommendItemProps {
  resultData: any
  isFocusTrue: boolean
}

const KeywordRecommendItem = ({ resultData, isFocusTrue }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()

  // TODO: 라우팅되도록. 예제 사이트 보시면 추천 검색어 클릭시 결과 페이지로 넘어갑니다.
  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: resultData.sickNm } as ISearchState))
    dispatch(setSearchToggle({ isOpen: false } as ISearchState))
  }

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocusTrue })} value={resultData.sickNm}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon className={styles.icon} />
        </div>
        <div className={styles.keywordName}>{resultData.sickNm}</div>
      </button>
    </li>
  )
}

export default KeywordRecommendItem
