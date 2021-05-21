import React from 'react'
import { shallow } from 'enzyme'
import LineChart from './LineChart'

describe('<LineChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<LineChart histories={[{ date: '2021-10-1', weekIncidence: 10.6548 }]} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
