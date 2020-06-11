import React from 'react';
import Result from '../components/Result/Result';
import { shallow } from 'enzyme';
import mockHandledResponse from '../__mocks__/mockHandledResponse.json'

describe('Result', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Result data={{ "distance": '' }}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows a helpful prompt while awaiting a request', () => {
    const wrapper = shallow(<Result data={{ "distance": '' }}/>);
    expect(wrapper.find('#awaiting-request').text()).toContain('To get started, please fill in the form and click submit');
  });

  it('shows actual results when a request response is received', () => {
    const wrapper = shallow(<Result data={mockHandledResponse} />);
    expect(wrapper.find('#results').text()).not.toContain('To get started, please fill in the form and click submit');
    expect(wrapper.find('#results').text()).toContain('Distance: 901.49 km');
  });

});
