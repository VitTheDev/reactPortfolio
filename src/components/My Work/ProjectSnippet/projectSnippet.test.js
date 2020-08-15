import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import ProjectSnippet from './ProjectSnippet';

describe('ProjectSnippet Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProjectSnippet />);
  });
  it('should render <Link> component', () => {
    expect(wrapper.find(Link)).toEqual({});
  });
});
