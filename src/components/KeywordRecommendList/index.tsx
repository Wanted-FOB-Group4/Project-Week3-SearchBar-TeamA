import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import cx from 'classnames'

import { useQueryDebounce } from 'hooks'
import { getDiseaseData } from 'services/search'
import { IKeywordRecommendItem } from 'types/search'
import { ISearchState, searchWord, setRecommendsCount } from 'store/slices/searchSlice'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommendList.module.scss'

const KeywordRecommendList = ({ keywordIndex }: { keywordIndex: number }) => {
  const dispatch = useDispatch()
  const keyword = useSelector(searchWord)
  const debouncedKeyword = useQueryDebounce(keyword, 300)

  const { data, isLoading } = useQuery<IKeywordRecommendItem[], Error>(
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

  const Recommends = useMemo(() => {
    if (isLoading) {
      return <div className={styles.loading}>Loading...</div>
    }

    if ((!data || data.length === 0) && keyword) {
      return <div className={styles.nothing}>추천 검색어가 없습니다</div>
    }

    return (
      <ul>
        {data?.map((keywordItem: IKeywordRecommendItem, index) => (
          <KeywordRecommendItem
            key={keywordItem.sickCd}
            keyword={keyword}
            keywordItem={keywordItem}
            isFocused={keywordIndex === index}
          />
        ))}
      </ul>
    )
  }, [isLoading, data, keyword, keywordIndex])

  return <div className={cx(styles.keywordListForm, { [styles.active]: data })}>{Recommends}</div>
}

export default KeywordRecommendList
