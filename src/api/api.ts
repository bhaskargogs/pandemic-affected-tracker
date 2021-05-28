import axios from 'axios'
import { Region, RegionData } from '../types'

const uri = `${process.env.REACT_APP_RKI_API_ENDPOINT}`
export const fetchRegionData = async (ags: string | null = null, frequency: number | ''): Promise<Region[]> => {
  let districtUri = uri
  if (ags && frequency) {
    districtUri = `${uri}/${ags}/${process.env.REACT_APP_RKI_HISTORY}/${frequency}`
  }
  try {
    const response = await axios.get(districtUri)
    return response.data.data[`${ags}`].history
  } catch (error) {
    return error
  }
}

export const fetchAllRegionData = async (ags: string | null = null): Promise<Region[]> => {
  let allDistrictUri = uri
  if (ags) {
    allDistrictUri = `${allDistrictUri}/${ags}/${process.env.REACT_APP_RKI_HISTORY}/`
  }
  try {
    const response = await axios.get(allDistrictUri)
    return response.data.data[`${ags}`].history
  } catch (error) {
    return error
  }
}

export const fetchDistricts = async (): Promise<RegionData[]> => {
  try {
    const {
      data: { data: districtObjects },
    } = await axios.get(uri)
    const responseArray: RegionData[] = []
    if (typeof Object.keys(districtObjects) !== undefined && Object.keys(districtObjects).length > 0) {
      Object.keys(districtObjects).forEach((value, index) => {
        const agsValue = districtObjects[value as keyof string].ags
        const nameValue = districtObjects[value as keyof string].name
        responseArray.push({ idx: index, ags: agsValue, name: nameValue })
        return { agsValue, nameValue }
      })
    }
    return responseArray
  } catch (error) {
    return error
  }
}
