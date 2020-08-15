import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Navigation from './Navigation/Navigation';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render a Navigation Component', () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });
  it('should render 5 Route Components', () => {
    expect(wrapper.find(Route)).toHaveLength(7);
  });
  it('should render a Switch Component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
});
