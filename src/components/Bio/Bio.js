import React from 'react';
import meImage from '../../images/me-min.jpg';

import './Bio.scss';

const Bio = () => {
  return (
    <div className="Bio">
      <div className="Wrapper">
        <div className="Image">
          <img src={meImage} alt="Vit" />
        </div>
        <div className="Content">
          <h2>I guess this is me now</h2>
          <p>
            I spent most of my adult life working as a sound and lighting
            engineer in the UK. From programming the sound, and the lighting
            rig, to delivering the best show possible. A couple years back I
            turned my attention towards programming and I fell in love with it.
            In programming you never run out of things to learn. Live sound and
            lighting is basically all aobut problem solving. That's something
            that really helped me when learning programming. If you're able to
            tough it out through the frustration of development, the end result
            is always worth it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
