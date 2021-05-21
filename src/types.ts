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
  idx: number
  name?: string
  ags?: string
}
