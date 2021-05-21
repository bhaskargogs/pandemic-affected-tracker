export type Region = {
  date: string
  weekIncidence: number
}

export type RegionResponseProps = {
  histories: Region[]
}

export type RegionRequestProps = {
  agsValue?: string
  frequency?: number
}

export type RegionData = {
  name: string
  ags: string
}
