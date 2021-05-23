import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import SelectComponent from './SelectComponent'
import { constants } from 'os'

describe('<SelectComponent /> for days', () => {
  let component: ShallowWrapper
  const props = {
    id: 'days-select',
    labelId: 'days-select-label',
    label: 'Select Days',
    value: [7, 31, 90],
    onChange: jest.fn(),
  }

  beforeEach(() => {
    component = shallow(<SelectComponent {...props} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should have Select', () => {
    const id = '#' + props.id
    const select = component.find(id)
    expect(select).toHaveLength(1)
  })

  test('It should display text', () => {
    const labelId = '#' + props.labelId
    const select = component.find(labelId)
    expect(select).toHaveLength(1)
    expect(select.text()).toEqual('Select Days')
  })

  test('User can select days onChange', () => {
    const id = '#' + props.id
    const select = component.find(id)
    select.simulate('change')
    expect(props.onChange).toHaveBeenCalled()
  })
})

describe('<SelectComponent /> for district', () => {
  let component: ShallowWrapper
  const props = {
    id: 'district-select',
    labelId: 'district-select-label',
    label: 'Select District',
    value: [
      { name: 'München', ags: '09184' },
      { name: 'Hamburg', ags: '02000' },
      { name: 'Köln', ags: '05315' },
    ],
    onChange: jest.fn(),
  }

  beforeEach(() => {
    component = shallow(<SelectComponent {...props} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  test('It should match snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  test('It should have Select', () => {
    const id = '#' + props.id
    const select = component.find(id)
    expect(select).toHaveLength(1)
  })

  test('It should display text', () => {
    const labelId = '#' + props.labelId
    const select = component.find(labelId)
    expect(select).toHaveLength(1)
    expect(select.text()).toEqual('Select District')
  })

  test('User can select days onChange', () => {
    const id = '#' + props.id
    const select = component.find(id)
    select.simulate('change')
    expect(props.onChange).toHaveBeenCalled()
  })
})
