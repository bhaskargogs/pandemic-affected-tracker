import axios from 'axios'
import { RegionData } from '../types'
import * as api from './api'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Api calls', () => {
  it('calls axios and returns districts', async () => {
    const districtData: RegionData[] = [{ idx: 0, name: 'Bonn', ags: '14587' }]
    mockAxios.get.mockReturnValue({ data: { data: districtData } })
    const result = await api.fetchDistricts()
    expect(mockAxios.get).toHaveBeenCalled()
    expect(result).toEqual(districtData)
  })
})
