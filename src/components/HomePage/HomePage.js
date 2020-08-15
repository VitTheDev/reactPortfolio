import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h2>Hi, I am Vit and I specialise in Frontend Web Development.</h2>

      <Link to="/mywork">
        <button className="button">See My Work</button>
      </Link>
    </div>
  );
};

export default HomePage;
