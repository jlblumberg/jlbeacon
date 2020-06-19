import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../components/Modal/Modal';

describe('Modal', () => {

  const wrapper = shallow(<Modal/>);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});