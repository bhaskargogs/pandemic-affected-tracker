import React from 'react'
import { shallow } from 'enzyme'
import LineChart from './LineChart'

describe('<LineChart />', () => {
  let component: unknown

  const histories = [
    { date: '20-05-2021', weekIncidence: 59.565 },
    { date: '19-05-2021', weekIncidence: 54.565 },
    { date: '18-05-2021', weekIncidence: 65.565 },
    { date: '17-05-2021', weekIncidence: 79.565 },
    { date: '16-05-2021', weekIncidence: 83.565 },
  ]

  beforeEach(() => {
    component = shallow(<LineChart histories={histories} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match Snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should contain line chart', () => {
    const lineChart = component.find('.LineChart')
    expect(lineChart).toHaveLength(1)
  })
})
