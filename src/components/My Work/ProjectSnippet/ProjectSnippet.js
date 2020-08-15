import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { key } from '../../../Pojects/Projects';

import './ProjectSnippet.scss';

const ProjectSnippet = (props) => {
  const [overlay, setOverlay] = useState(false);
  const [image, setImage] = useState(null);
  const fetchVideoImage = async () => {
    await axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: `${props.youtubeId}`,
          key: key,
        },
      })
      .then((res) => setImage(res.data.items[0].snippet.thumbnails.medium.url))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVideoImage();
  }, []);

  return (
    <div
      onMouseEnter={() => setOverlay(true)}
      className="ProjectSnippet"
      onMouseLeave={() => setOverlay(false)}
    >
      <div>
        {image ? <img src={image} alt={props.name} /> : <h2>Loading...</h2>}
      </div>
      {overlay ? (
        <Link to={`/mywork/${props.youtubeId}`}>
          <div className="Overlay">
            <h3>{props.name}</h3>
            <h5>Click for details</h5>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default ProjectSnippet;
