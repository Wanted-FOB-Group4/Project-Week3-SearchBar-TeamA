import axios from 'axios'

import { IKeywordRecommendItem } from 'types/search'

let apiCallCount = 0

export const getDiseaseData = async (keyword: string) => {
  if (keyword === '') return []

  apiCallCount += 1
  // eslint-disable-next-line no-console
  console.log('API 호출 횟수:', apiCallCount)

  const { data } = await axios.get<IKeywordRecommendItem[]>(
    `${process.env.REACT_APP_DISEASE_INFO_API_BASE_URL}/api/v1/search-conditions/?name=${keyword}`
  )

  return data
}
