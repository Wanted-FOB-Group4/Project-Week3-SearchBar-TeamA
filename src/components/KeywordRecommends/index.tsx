import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import cx from 'classnames'

import { applyFuzzyMatch } from 'utils/fuzzySearch'
import { getDiseaseData } from 'services/search'
import { ISearchState, searchWord, setRecommendsCount } from 'store/slices/searchSlice'
import { IDisease, IFuzzyDisease } from 'types/search'
import { useQueryDebounce } from 'hooks'

import KeywordRecommendItem from 'components/KeywordRecommendItem'
import styles from './KeywordRecommends.module.scss'

const KeywordRecommends = ({ keywordIndex }: { keywordIndex: number }) => {
  const dispatch = useDispatch()
  const keyword = useSelector(searchWord)
  const debouncedKeyword = useQueryDebounce(keyword, 300)

  const { data, isLoading, isError, error } = useQuery<IDisease[], Error>(
    ['diseaseData', debouncedKeyword],
    () => getDiseaseData(debouncedKeyword),
    {
      retry: 1,
      staleTime: 60 * 60 * 1000,
      enabled: !!debouncedKeyword,
      onSuccess: (res) => {
        dispatch(setRecommendsCount({ recommendsCount: res.length } as ISearchState))
      },
    }
  )

  const fuzzyData = applyFuzzyMatch(data || [], keyword)

  const Recommends = useMemo(() => {
    if (isLoading) {
      return <div className={styles.loading}>Loading...</div>
    }

    if (isError) {
      return <div className={styles.error}>{error.message}</div>
    }

    // if (data && keyword && fuzzyData.length === 0) {
    //   return <div>추천 검색어가 없습니다</div>
    // }

    return (
      <ul>
        {fuzzyData.map((keywordItem: IFuzzyDisease, index) => (
          <KeywordRecommendItem
            key={keywordItem.sickCd}
            keyword={keyword}
            keywordItem={keywordItem}
            isFocused={keywordIndex === index}
          />
        ))}
      </ul>
    )
  }, [fuzzyData, error, isError, isLoading, keywordIndex, keyword])

  return <div className={cx(styles.keywordListForm, { [styles.active]: data })}>{Recommends}</div>
}

export default KeywordRecommends
