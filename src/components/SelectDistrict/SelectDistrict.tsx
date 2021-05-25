import { MenuItem } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { fetchDistricts, fetchRegionData } from '../../api/api'
import { Region, RegionData } from '../../types'
import LineChart from '../LineChart/LineChart'
import SelectComponent from '../SelectComponent/SelectComponent'
import './SelectDistrict.scss'

const SelectDistrict: React.FC = () => {
  const [histories, setHistories] = useState<Region[]>([])
  const [districtOptions, setDistrictOptions] = useState<RegionData[]>([])
  const [region, setRegion] = useState<string | null>(null)
  const [days, setDays] = useState<number>(7)

  const regionHandler = async (event: ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string)
    setHistories(await fetchRegionData(event.target.value as string, days))
  }

  const daysHandler = async (event: ChangeEvent<{ value: unknown }>) => {
    setDays(event.target.value as number)
    setHistories(await fetchRegionData(region, event.target.value as number))
  }

  useEffect(() => {
    const getDistricts = async () => {
      setDistrictOptions(await fetchDistricts())
    }
    getDistricts()
  }, [])

  const districtData = useMemo(() => {
    return districtOptions
  }, [districtOptions])

  const historiesData = useMemo(() => {
    return histories
  }, [histories])

  return (
    <div>
      {districtData ? (
        <div className="m-3 d-flex justify-content-center">
          <SelectComponent labelId="district-select-label" id="district-select" label="Select District" value={region || ''} onChange={regionHandler}>
            {districtData.map((district) => (
              <MenuItem key={district.idx} value={district.ags}>
                {district.name}
              </MenuItem>
            ))}
          </SelectComponent>
          <SelectComponent labelId="days-select-label" id="days-select" label="Select Days" value={days} onChange={daysHandler}>
            <MenuItem value={7}>1 week</MenuItem>
            <MenuItem value={31}>1 month</MenuItem>
            <MenuItem value={90}>3 months</MenuItem>
            <MenuItem value={183}>6 months</MenuItem>
            <MenuItem value={365}>1 year</MenuItem>
            <MenuItem value={districtOptions.length}>All</MenuItem>
          </SelectComponent>
        </div>
      ) : (
        <div className="m-3 d-flex justify-content-center">Loading...</div>
      )}

      <LineChart histories={historiesData} />
    </div>
  )
}

export default SelectDistrict
