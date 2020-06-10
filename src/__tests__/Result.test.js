import React from 'react';
import Result from '../components/Result/Result';
import { shallow } from 'enzyme';

describe('Result', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Result/>);
    expect(wrapper).toMatchSnapshot();
  });

});