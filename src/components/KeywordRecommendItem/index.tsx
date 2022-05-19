import cx from 'classnames'

import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { useDispatch } from 'react-redux'
import { ISearchState, setSearchToggle, setSearchWord } from 'store/slices/searchSlice'

interface SearchKeywordRecommendItemProps {
  resultData: any
  isFocusTrue: boolean
}

const KeywordRecommendItem = ({ resultData, isFocusTrue }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()

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
