import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames'

import { MagnifyingGlassIcon } from 'assets/svgs'

import styles from './KeywordRecommendItem.module.scss'
import { IFuzzyDisease } from 'types/search'
import { createFuzzyMatcher } from 'utils/fuzzySearch'
import { ISearchInputState, setSearchInputValue } from 'store/slices/searchInputSlice'
import { useEffect } from 'react'

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

  const markedKeywordHtml = sickNm.replace(regex, (match, ...groups) => {
    const letters = groups.slice(0, keyword.length)
    let lastIndex = 0
    const highlighted: string[] = []

    letters.forEach((letter) => {
      const idx = match.indexOf(letter, lastIndex)
      highlighted.push(match.substring(lastIndex, idx))
      highlighted.push(`<mark>${letter}</mark>`)

      lastIndex = idx + 1
    })

    return highlighted.join('')
  })

  const handleKeywordClick = () => {
    dispatch(setSearchInputValue({ searchInputValue: keywordItem.sickNm } as ISearchInputState))
    navigate(`/search/${keywordItem.sickNm}`)
  }

  useEffect(() => {
    isFocused && dispatch(setSearchInputValue({ searchInputValue: keywordItem.sickNm } as ISearchInputState))
  }, [dispatch, isFocused, keywordItem.sickNm])

  return (
    <li className={cx(styles.listKeyword, { [styles.focusKeyword]: isFocused })} value={keywordItem.sickNm}>
      <button type='button' className={styles.keywordBtn} onClick={handleKeywordClick}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon className={styles.icon} />
        </div>
        <div
          className={styles.keywordName}
          aria-label={keywordItem.sickNm}
          dangerouslySetInnerHTML={{ __html: markedKeywordHtml }}
        />
      </button>
    </li>
  )
}

export default KeywordRecommendItem
