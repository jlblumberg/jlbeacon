import React from 'react';
import { shallow } from 'enzyme';
import WelcomeModal from '../components/WelcomeModal/WelcomeModal';

describe('Modal', () => {

  const wrapper = shallow(<WelcomeModal />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a title and description', () => {
    expect(wrapper.find('#alert-dialog-title').exists()).toEqual(true);
    expect(wrapper.find('#alert-dialog-description').exists()).toEqual(true);
  });

});