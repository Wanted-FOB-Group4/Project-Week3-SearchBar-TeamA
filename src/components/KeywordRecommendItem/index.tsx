import { Dispatch, SetStateAction } from 'react'
import cx from 'classnames'

import { IResultDataList } from 'types/search'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'

interface SearchKeywordRecommendItemProps {
  setKeyword: Dispatch<SetStateAction<string>>
  resultData: IResultDataList
  isFocusTrue: boolean
}

const KeywordRecommendItem = ({ setKeyword, resultData, isFocusTrue }: SearchKeywordRecommendItemProps) => {
  const handleKeywordClick = () => {
    setKeyword(resultData.name)
  }

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocusTrue })} value={resultData.name}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon />
        </div>
        <div className={styles.keywordName}>{resultData.name}</div>
      </button>
    </li>
  )
}

export default KeywordRecommendItem
