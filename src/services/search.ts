import axios from 'axios'

import { createFuzzyMatcher } from 'utils/fuzzySearch'
import { IDisease } from 'types/search'

interface DiseaseListResponse {
  item: IDisease[]
}

let count = 0

export const getDiseaseData = async (keyword: string) => {
  if (keyword === '') return []

  const {
    data: { item },
  } = await axios.get<DiseaseListResponse>('/diseaseList.json')

  count += 1
  console.log('count:', count)

  const regex = createFuzzyMatcher(keyword)
  const fuzzyData = item
    .filter((row) => {
      return regex.test(row.sickNm)
    })
    .map((row) => {
      let longestDistance = 0

      const disease = row.sickNm.replace(regex, (match, ...groups) => {
        const letters = groups.slice(0, keyword.length)
        let lastIndex = 0
        const highlighted: string[] = []

        letters.forEach((letter) => {
          const idx = match.indexOf(letter, lastIndex)
          highlighted.push(match.substring(lastIndex, idx))
          highlighted.push(`#${letter}#`)

          if (lastIndex > 0) {
            longestDistance = Math.max(longestDistance, idx - lastIndex)
          }

          lastIndex = idx + 1
        })

        return highlighted.join('')
      })

      return { sickNm: disease, sickCd: row.sickCd, longestDistance }
    })

  if (fuzzyData.length === 0) throw new Error('추천 검색어가 없습니다')

  fuzzyData.sort((a, b) => {
    return a.longestDistance - b.longestDistance
  })

  return fuzzyData.slice(0, 7)
}
