import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'

import { getDiseaseData } from 'services/search'
import { searchWord } from 'store/slices/searchSlice'
import { IDisease } from 'types/search'
import { useQueryDebounce } from 'hooks'
import KeywordRecommendItem from 'components/KeywordRecommendItem'

import styles from './KeywordRecommends.module.scss'

const KeywordRecommends = () => {
  const keyword = useSelector(searchWord)
  const debouncedKeyword = useQueryDebounce(keyword, 300)

  const { data, isLoading, isError, error } = useQuery<IDisease[], Error>(
    ['diseaseData', debouncedKeyword],
    () => getDiseaseData(debouncedKeyword),
    {
      retry: 1,
      staleTime: 60 * 60 * 1000,
      enabled: !!debouncedKeyword,
    }
  )

  const Recommends = useMemo(() => {
    if (isLoading) {
      return <div className={styles.list}>Loading...</div>
    }

    if (isError) {
      return <div>{error.message}</div>
    }

    return (
      <ul>
        {data?.map((resultData: IDisease) => (
          <KeywordRecommendItem key={resultData.sickCd} resultData={resultData} />
        ))}
      </ul>
    )
  }, [data, error, isError, isLoading])

  return <div className={styles.keywordListForm}>{Recommends}</div>
}

export default KeywordRecommends
