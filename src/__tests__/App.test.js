import React from 'react';
import { mount } from 'enzyme'
import App from '../App';

describe('App', () => {

  it('renders correctly', () => {
    let wrapper = mount(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
  
});
