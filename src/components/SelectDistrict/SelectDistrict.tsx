import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { fetchDistricts, fetchRegionData } from '../../api/api'
import { Region, RegionData } from '../../types'
import LineChart from '../LineChart/LineChart'
import './SelectDistrict.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(5),
      width: 250,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

const SelectDistrict: React.FC = () => {
  const classes = useStyles()
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

  return (
    <div>
      <div className="m-3 d-flex justify-content-center">
        <FormControl className={classes.formControl}>
          <InputLabel id="district-select-label">Select District</InputLabel>
          <Select labelId="district-select-label" id="district-select" value={region || ''} onChange={regionHandler}>
            {districtOptions &&
              districtOptions.map((district) => (
                <MenuItem key={district.idx} value={district.ags}>
                  {district.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="days-select-label">Select Days</InputLabel>
          <Select labelId="days-select-label" id="days-select" value={days} onChange={daysHandler}>
            <MenuItem value={7}>1 week</MenuItem>
            <MenuItem value={31}>1 month</MenuItem>
            <MenuItem value={90}>3 months</MenuItem>
            <MenuItem value={183}>6 months</MenuItem>
            <MenuItem value={365}>1 year</MenuItem>
            <MenuItem value={districtOptions.length}>All</MenuItem>
          </Select>
        </FormControl>
      </div>

      <LineChart histories={histories} />
    </div>
  )
}

export default SelectDistrict
