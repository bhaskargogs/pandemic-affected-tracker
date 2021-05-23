// src/AppRouter.test.tsx
import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import AppRouter from './AppRouter'

describe('<AppRouter />', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<AppRouter />)
  })

  test('renders without crashing', () => {
    expect(component.length).toBe(1)
  })

  test('It should match Snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })
})
