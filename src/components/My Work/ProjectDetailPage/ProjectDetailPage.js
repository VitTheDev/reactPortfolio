import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../../Pojects/Projects';

import './ProjectDetail.scss';

const ProjectDetailPage = (props) => {
  const project = projects.find(
    (prj) => prj.youtubeId === props.match.params.id
  );
  console.log(project);
  return (
    <div className="ProjectDetail">
      <div className="Content">
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="Video">
        <iframe
          title={project.youtubeId}
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="meta">
        <ul>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
      <div className="github">
        <Link to="/github" target="_blank">
          <button>GitHub Repo</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
