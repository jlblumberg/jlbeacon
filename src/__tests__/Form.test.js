import React from 'react'
import { shallow } from 'enzyme';
import Form from '../components/Form/Form';
import { Button } from '@material-ui/core';

describe('Form', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a form to choose the route details', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('#route-details-input').exists()).toEqual(true);
  });

  it('has a button to submit the details', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find('#route-details-submit').exists()).toEqual(true);
  });
  
  it('submit button should be disabled by default', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find({ name: 'submit-button' }).prop('disabled')).toEqual(true);
  });

  // it('submit button should become enabled when all fields are filled', () => {
  //   const wrapper = shallow(<Form/>);
  //   wrapper.find({ name: 'startLat' }).simulate('change', { target: { name: 'startLat', value: '12' } });
  //   wrapper.find({ name: 'startLong' }).simulate('change', { target: { name: 'startLong', value: '13' } });
  //   wrapper.find({ name: 'endLat' }).simulate('change', { target: { name: 'endLat', value: '14' } });
  //   wrapper.find({ name: 'endLong' }).simulate('change', { target: { name: 'endLong', value: '15' } });
  //   wrapper.find({ name: 'submit-button' }).simulate('click');
  //   expect(wrapper.find({ name: 'submit-button' }).prop('disabled')).toEqual(false);
  // });

});