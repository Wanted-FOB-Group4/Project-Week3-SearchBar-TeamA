import { Dispatch, SetStateAction } from 'react'

import { IResultDataList } from 'types/search'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'

interface SearchKeywordRecommendItemProps {
  setKeyword: Dispatch<SetStateAction<string>>
  resultData: IResultDataList
}

const KeywordRecommendItem = ({ setKeyword, resultData }: SearchKeywordRecommendItemProps) => {
  const handleKeywordClick = () => {
    setKeyword(resultData.name)
  }

  return (
    <li className={styles.listKeyword} value={resultData.name}>
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
