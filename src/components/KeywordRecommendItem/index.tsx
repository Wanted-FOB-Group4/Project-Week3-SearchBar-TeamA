import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { ISearchState, setSearchWord } from 'store/slices/searchSlice'
import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IFuzzyDisease } from 'types/search'
import { createFuzzyMatcher } from 'utils/fuzzySearch'

interface SearchKeywordRecommendItemProps {
  keyword: string
  keywordItem: IFuzzyDisease
  isFocused: boolean
}

const KeywordRecommendItem = ({ keyword, keywordItem, isFocused }: SearchKeywordRecommendItemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { sickNm } = keywordItem
  const regex = createFuzzyMatcher(keyword)
  const markedKeywordRegex = /(#[A-Za-z0-9가-힣]{1,100}#)/gi
  const markedKeyword = sickNm
    .replace(regex, (match, ...groups) => {
      const letters = groups.slice(0, keyword.length)
      let lastIndex = 0
      const highlighted: string[] = []

      letters.forEach((letter) => {
        const idx = match.indexOf(letter, lastIndex)
        highlighted.push(match.substring(lastIndex, idx))
        highlighted.push(`#${letter}#`)

        lastIndex = idx + 1
      })

      return highlighted.join('')
    })
    .split(markedKeywordRegex)

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
