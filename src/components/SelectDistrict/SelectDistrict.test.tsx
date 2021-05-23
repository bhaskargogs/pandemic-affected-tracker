import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import SelectDistrict from './SelectDistrict'

describe('<SelectDistrict />', () => {
  let component: ShallowWrapper
  jest.mock('./SelectDistrict')
  // let shallow
  beforeEach(() => {
    // shallow = createShallow()
    component = shallow(<SelectDistrict />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match Snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should have SelectComponent', () => {
    const selectComponent = component.find('SelectComponent')
    expect(selectComponent).toHaveLength(2)
  })

  test('It should have Line component', () => {
    const lineComponent = component.find('LineChart')
    expect(lineComponent).toHaveLength(1)
  })
})
