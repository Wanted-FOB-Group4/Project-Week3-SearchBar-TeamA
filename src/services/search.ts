import axios from 'axios'

import { IDisease } from 'types/search'

interface DiseaseListResponse {
  item: IDisease[]
}

let apiCallCount = 0

export const getDiseaseData = async (keyword: string) => {
  if (keyword === '') return []

  apiCallCount += 1
  // eslint-disable-next-line no-console
  console.log('API 호출 횟수:', apiCallCount)

  const {
    data: { item },
  } = await axios.get<DiseaseListResponse>('/diseaseList.json')

  return item
}
