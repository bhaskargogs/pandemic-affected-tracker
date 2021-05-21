import axios from 'axios'

const uri = `${process.env.REACT_APP_RKI_API_ENDPOINT}`
// eslint-disable-next-line consistent-return
export const fetchRegionData = async (ags: string | null = null, frequency: number | null = null) => {
  let districtUri = uri
  if (ags && frequency) {
    districtUri = `${uri}/${ags}/${process.env.REACT_APP_RKI_HISTORY}/${frequency}`
  }
  try {
    const response = await axios.get(districtUri)
    // if (response.data.data[`${ags}`].history !== undefined) {
    return response.data.data[`${ags}`].history
    // }
  } catch (error) {
    return error
  }
}
