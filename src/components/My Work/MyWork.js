import React from 'react';

import { projects } from '../../Pojects/Projects';
import ProjectSnippet from './ProjectSnippet/ProjectSnippet';

import './MyWork.scss';

const MyWork = (props) => {
  return (
    <div className="MyWork">
      <div className="ProjectsGrid">
        {projects.map((item) => (
          <ProjectSnippet
            key={item.id}
            youtubeId={item.youtubeId}
            name={item.name}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
