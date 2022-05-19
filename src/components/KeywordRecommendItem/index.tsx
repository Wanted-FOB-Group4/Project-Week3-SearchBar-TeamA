import cx from 'classnames'

import { IResultDataList } from 'types/search'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { useDispatch } from 'react-redux'
import { SearchWord, setSearchToggle, setSearchWord } from 'store/slices/searchSlice'

interface SearchKeywordRecommendItemProps {
  resultData: IResultDataList
  isFocusTrue: boolean
}

const KeywordRecommendItem = ({ resultData, isFocusTrue }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()

  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: resultData.name } as SearchWord))
    dispatch(setSearchToggle({ isOpen: false } as SearchWord))
  }

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocusTrue })} value={resultData.name}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon className={styles.icon} />
        </div>
        <div className={styles.keywordName}>{resultData.name}</div>
      </button>
    </li>
  )
}

export default KeywordRecommendItem
