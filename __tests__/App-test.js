import ReactNative from 'react-native';
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import App from '../App';


const { View, Text, Switch } = ReactNative;

describe('jest snapshot tests', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('enzyme tests', () => {
  it('should render a <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View)).toHaveLength(1);
    expect(wrapper.find(Text)).toHaveLength(3);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('should togggle switch to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isToggled).toBe(false);
    wrapper.find(Switch).first().props().onChange();
    expect(wrapper.state().isToggled).toBe(true);
  });
});
