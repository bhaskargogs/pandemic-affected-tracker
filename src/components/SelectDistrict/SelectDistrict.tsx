import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ValueType } from 'react-select'
import { fetchRegionData } from '../../api/api'
import { Region, RegionData } from '../../types'
import { regionData } from '../data'
import LineChart from '../LineChart/LineChart'
import './SelectDistrict.scss'

const districtOptions: RegionData[] = regionData

const SelectDistrict: React.FC = () => {
  const loaded = useRef(false)
  const [histories, setHistories] = useState<Region[]>([])
  const [region, setRegion] = useState<string | null>(null)
  const [days, setDays] = useState<number>(7)
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null)

  const regionHandler = async (event: ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value)
    setHistories(await fetchRegionData(event.target.value, days))
  }

  const daysHandler = async (event: ChangeEvent<HTMLSelectElement>) => {
    setDays(parseInt(event.target.value, 0))
    setHistories(await fetchRegionData(region, parseInt(event.target.value, 0)))
  }

  const handleChange = async (option: ValueType<RegionData, false>) => {
    setSelectedRegion(option)
    setHistories(await fetchRegionData(option?.ags, days))
  }
  useEffect(() => {
    if (loaded.current) {
      handleChange(selectedRegion)
    } else {
      loaded.current = true
    }
  }, [])
  return (
    <div>
      <div className="m-3 d-flex justify-content-center">
        <select value={region || ''} onChange={regionHandler}>
          {districtOptions &&
            districtOptions.map((district) => (
              <option key={district.ags} value={district.ags}>
                {district.name}
              </option>
            ))}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value={7}>1 week</option>
          <option value={31}>1 month</option>
          <option value={90}>3 months</option>
          <option value={183}>6 months</option>
          <option value={0}>All</option>
        </select>
      </div>
      <LineChart histories={histories} />
    </div>
  )
}

export default SelectDistrict
