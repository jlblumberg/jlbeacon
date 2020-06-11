import React from 'react';
import { shallow } from 'enzyme'
import Credit from '../components/Credit/Credit';

describe('Credit', () => {

  it('renders correctly', () => {
    let wrapper = shallow(<Credit />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a credit line at the bottom', () => {
    const wrapper = shallow(<Credit />);
    expect(wrapper.find('#credit').text()).toContain('Josh Blumberg');
  });

});
