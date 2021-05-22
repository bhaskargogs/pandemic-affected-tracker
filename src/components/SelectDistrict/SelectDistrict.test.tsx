import { Select } from '@material-ui/core'
import { mount, shallow } from 'enzyme'
import React, { ComponentProps } from 'react'
import Sinon from 'sinon'
import SelectDistrict from './SelectDistrict'

describe('<SelectDistrict />', () => {
  let component: unknown

  beforeEach(() => {
    component = shallow(<SelectDistrict />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match Snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should have 2 select boxes', () => {
    const districtSelect = component.find('#district-select-label')
    expect(districtSelect).toHaveLength(1)
    expect(districtSelect.text()).toEqual('Select District')
    const daySelect = component.find('#days-select-label')
    expect(daySelect).toHaveLength(1)
    expect(daySelect.text()).toEqual('Select Days')
  })

  test('user selects days', () => {
    const daysSelect = component
      .find(Select)
      .last()
      .simulate('change', { target: { value: '7' } })
    expect(daysSelect.text()).toContain('1 week')
  })

  test('It should have Line component', () => {
    const lineComponent = component.find('LineChart')
    expect(lineComponent).toHaveLength(1)
  })
})
