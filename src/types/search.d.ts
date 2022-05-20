export interface IDisease {
  sickCd: string
  sickNm: string
}

export type RootState = ReturnType<typeof store.getState>
