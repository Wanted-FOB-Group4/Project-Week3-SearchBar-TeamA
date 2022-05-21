import axios from 'axios'

import { IDisease } from 'types/search'

interface DiseaseListResponse {
  item: IDisease[]
}

let count = 0

export const getDiseaseData = async (keyword: string) => {
  if (keyword === '') return []

  count += 1
  console.log('count:', count)

  const {
    data: { item },
  } = await axios.get<DiseaseListResponse>('/diseaseList.json')

  return item
}
