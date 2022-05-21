import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IFuzzyDisease } from 'types/search'

interface SearchKeywordRecommendItemProps {
  keywordItem: IFuzzyDisease
  isFocused: boolean
}

const KeywordRecommendItem = ({ keywordItem, isFocused }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const markedKeywordRegex = /(#[A-Za-z0-9가-힣]{1,100}#)/gi
  const markedKeyword = keywordItem.disease.split(markedKeywordRegex)

  const handleKeywordClick = () => {
    dispatch(setSearchWord({ keyword: keywordItem.sickNm } as ISearchState))
    navigate(`/search/${keywordItem.sickNm}`)
  }

  const MarkedKeyword = useMemo(() => {
    const markedKeywordItem = (value: string, index: number) => {
      if (value.startsWith('#') && value.endsWith('#')) {
        return <mark key={`marked_text_${value}_${index}`}>{value.replace(/#/g, '')}</mark>
      }
      return <pre key={`text_${value}_${index}`}>{value}</pre>
    }

    return markedKeyword.map((item, index) => markedKeywordItem(item, index))
  }, [markedKeyword])

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocused })} value={keywordItem.sickNm}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon className={styles.icon} />
        </div>
        <div className={styles.keywordName} aria-label={keywordItem.sickNm}>
          {MarkedKeyword}
        </div>
      </button>
    </li>
  )
}

export default KeywordRecommendItem
