import React from 'react'
import { shallow } from 'enzyme';
import Form from '../components/Form/Form';

describe('Form', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a form to choose the route details', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('#route-details-input').exists()).toEqual(true);
  });

});