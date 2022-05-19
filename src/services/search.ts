import axios from 'axios'

export interface IDisease {
  sickCd: string
  sickNm: string
}

// 단순 문자열 체크 버전
// TODO: 퍼지 문자열 검색 로직 추가
export const getDiseaseData = async (keyword: string) => {
  if (keyword === '') return []

  const {
    data: { item },
  } = await axios.get('/diseaseList.json')

  const filtered = item.filter((disease: IDisease) => disease.sickNm.includes(keyword))

  if (filtered.length === 0) throw new Error('추천 검색어가 없습니다')

  return filtered
}
