import React from 'react';
import { shallow } from 'enzyme';
import { Link, MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  it('renders a div with an h2 inside', () => {
    const wrapper = shallow(<HomePage />);
    // console.log(wrapper.debug());
    expect(wrapper.find('div h2')).toHaveLength(1);
  });
  it('renders', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap).toMatchSnapshot();
  });
  it('renders a link to MyWork Component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
