export interface IDisease {
  sickCd: string
  sickNm: string
}
export interface IFuzzyDisease extends IDisease {
  disease: string
  longestDistance: number
}

export type RootState = ReturnType<typeof store.getState>
