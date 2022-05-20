import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IDisease } from 'types/search'

interface SearchKeywordRecommendItemProps {
  resultData: IDisease
  isFocused: boolean
}

const KeywordRecommendItem = ({ resultData, isFocused }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
   const markedKeywordRegex = /(#[A-Za-z0-9가-힣]{1,100}#)/gi
  const recommendData = resultData.sickNm.split(markedKeywordRegex)

  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: resultData.sickNm } as ISearchState))
    navigate(`/search/${resultData.sickNm}`)
  }

  const returnTag = (value: string, index: number) => {
    if (value.startsWith('#') && value.endsWith('#')) {
      return <mark key={`highlighted_text_${value}_${index}`}>{value.replace(/#/g, '')}</mark>
    }

    return <pre key={`text_${value}_${index}`}>{value}</pre>
  }

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocused })} value={resultData.sickNm}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon className={styles.icon} />
        </div>
        <div className={styles.keywordName}>
          {recommendData.map((data, index) => {
            return returnTag(data, index)
          })}
        </div>
      </button>
    </li>
  )
}

export default KeywordRecommendItem
