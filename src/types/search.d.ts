export interface IResultDataList {
  name: string
  id: number
}

export type RootState = ReturnType<typeof store.getState>
