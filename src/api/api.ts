import axios from 'axios'
import { RegionData } from '../types'

const uri = `${process.env.REACT_APP_RKI_API_ENDPOINT}`
// eslint-disable-next-line consistent-return
export const fetchRegionData = async (ags: string | null = null, frequency: number | '') => {
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

export const fetchAllRegionData = async (ags: string | null = null) => {
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

export const fetchDistricts = async () => {
  try {
    const response = await axios.get(uri)
    const responseObject = Object.keys(response.data.data)
    const responseArray: RegionData[] = []
    responseObject.forEach((value, index) => {
      const agsValue = response.data.data[value].ags
      const nameValue = response.data.data[value].name
      responseArray.push({ idx: index, ags: agsValue, name: nameValue })
      return { agsValue, nameValue }
    })
    return responseArray
  } catch (error) {
    return error
  }
}
