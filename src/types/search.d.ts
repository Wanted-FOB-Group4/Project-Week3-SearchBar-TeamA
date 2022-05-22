export interface IKeywordRecommendItem {
  sickCd: string
  sickNm: string
  longestDistance: number
}

export type RootState = ReturnType<typeof store.getState>
