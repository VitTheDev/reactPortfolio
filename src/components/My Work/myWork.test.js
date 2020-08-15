import React from 'react';
import { shallow } from 'enzyme';

import MyWork from './MyWork';
import ProjectSnippet from './ProjectSnippet/ProjectSnippet';

describe('MyWork Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MyWork />);
  });
  it('should render 9 <ProjectSnippet /> Components', () => {
    expect(wrapper.find(ProjectSnippet)).toHaveLength(9);
  });
});
