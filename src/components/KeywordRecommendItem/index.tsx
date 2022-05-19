import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IDisease } from 'types/search'

interface SearchKeywordRecommendItemProps {
  resultData: IDisease
  isFocusTrue: boolean
}

const KeywordRecommendItem = ({ resultData, isFocusTrue }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // TODO: 라우팅되도록. 예제 사이트 보시면 추천 검색어 클릭시 결과 페이지로 넘어갑니다.
  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: resultData.sickNm } as ISearchState))
    navigate(`/search/${resultData.sickNm}`)
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
