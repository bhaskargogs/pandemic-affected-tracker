import { MenuItem } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { fetchDistricts, fetchRegionData } from '../../api/api'
import { selectFrequency } from '../../redux/daysSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Region, RegionData } from '../../types'
import LineChart from '../LineChart/LineChart'
import SelectComponent from '../SelectComponent/SelectComponent'
import './SelectDistrict.scss'

const SelectDistrict: React.FC = () => {
  const daysList = useAppSelector((state) => state.days.daysList)
  const dispatch = useAppDispatch()
  const [histories, setHistories] = useState<Region[]>([])
  const [districtOptions, setDistrictOptions] = useState<RegionData[]>([])
  const [region, setRegion] = useState<string | null>(null)
  const [days, setDays] = useState<number>(useAppSelector((state) => state.days.selectedDays).value)

  const regionHandler = async (event: ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string)
    setHistories(await fetchRegionData(event.target.value as string, days))
  }

  const daysHandler = async (event: ChangeEvent<{ value: unknown }>) => {
    setDays(event.target.value as number)
    dispatch(selectFrequency(event.target.value as number))
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
            {daysList.map((frequency) => (
              <MenuItem key={frequency.id} value={frequency.value}>
                {frequency.name}
              </MenuItem>
            ))}
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
