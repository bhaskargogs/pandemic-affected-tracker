import React from 'react';
import { shallow } from 'enzyme';
import SelectDistrict from './SelectDistrict';

describe('<SelectDistrict />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SelectDistrict />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
