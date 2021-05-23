import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import SelectComponent from './SelectComponent'

describe('<SelectComponent />', () => {
  let component: ShallowWrapper
  const props = {
    id: 'days-select',
    labelId: 'days-select-label',
    label: 'Select days',
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

  test('User selects days', () => {
    const id = '#' + props.id
    const select = component.find(id)
    expect(select).toHaveLength(1)
  })
})
