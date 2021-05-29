/* eslint-disable import/no-extraneous-dependencies */
import { act, cleanup, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import axios from 'axios'
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import { RegionData } from '../../types'
import SelectDistrict from './SelectDistrict'

export const districts: RegionData[] = [
  { idx: 1, name: 'Bonn', ags: '12345' },
  { idx: 2, name: 'Rheinbach', ags: '23409' },
  { idx: 3, name: 'Köln', ags: '23107' },
]

describe('<SelectDistrict />', () => {
  let component: ShallowWrapper
  // jest.mock('axios')
  // const mockAxios = axios as jest.Mocked<typeof axios>

  beforeEach(() => {
    // mockAxios.get.mockReturnValue({ data: { data: districtOptions } })
    component = shallow(<SelectDistrict />)
  })

  afterEach(cleanup)

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match Snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should display "Loading" while rendering districts ', async () => {
    await act(async () => {
      render(<SelectDistrict />)
      screen.getByText(/Loading/i)
    })
  })

  test('Removes text "Loading" after displaying districts ', async () => {
    await act(async () => {
      render(<SelectDistrict />)
      await waitForElementToBeRemoved(() => screen.getByText(/Loading/i))
    })
  })

  test('display the districts received', async () => {
    await act(async () => {
      const { getByLabelText } = render(<SelectDistrict />)
      await waitFor(() => getByLabelText(/Select District/i))
    })
  })

  test('It should have Line component', () => {
    const lineComponent = component.find('LineChart')
    expect(lineComponent).toHaveLength(1)
  })
})
