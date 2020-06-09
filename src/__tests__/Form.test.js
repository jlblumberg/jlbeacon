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
  
  it('fields default to blank, but change on fill', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper.find({ name: 'startLat' }).prop('value')).toEqual('');
    expect(wrapper.find({ name: 'startLong' }).prop('value')).toEqual('');
    expect(wrapper.find({ name: 'endLat' }).prop('value')).toEqual('');
    expect(wrapper.find({ name: 'endLong' }).prop('value')).toEqual('');
    wrapper.find({ name: 'startLat' }).simulate('change', { target: { name: 'startLat', value: '12' } });
    wrapper.find({ name: 'startLong' }).simulate('change', { target: { name: 'startLong', value: '13' } });
    wrapper.find({ name: 'endLat' }).simulate('change', { target: { name: 'endLat', value: '14' } });
    wrapper.find({ name: 'endLong' }).simulate('change', { target: { name: 'endLong', value: '15' } });
    expect(wrapper.find({ name: 'startLat' }).prop('value')).toEqual('12');
    expect(wrapper.find({ name: 'startLong' }).prop('value')).toEqual('13');
    expect(wrapper.find({ name: 'endLat' }).prop('value')).toEqual('14');
    expect(wrapper.find({ name: 'endLong' }).prop('value')).toEqual('15');
  });

});