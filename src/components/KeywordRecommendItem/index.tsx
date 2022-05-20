import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IDisease } from 'types/search'

interface SearchKeywordRecommendItemProps {
  resultData: IDisease
}

const KeywordRecommendItem = ({ resultData }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: resultData.sickNm } as ISearchState))
    navigate(`/search/${resultData.sickNm}`)
  }

  return (
    <li className={cx(styles.listKeyword)} value={resultData.sickNm}>
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
