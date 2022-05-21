export interface IDisease {
  sickCd: string
  sickNm: string
}
export interface IFuzzyDisease extends IDisease {
  longestDistance: number
}

export type RootState = ReturnType<typeof store.getState>
