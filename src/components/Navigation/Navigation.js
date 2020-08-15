import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <div className="Logo">
        <NavLink activeClassName="Active" className="btn btn1" exact to="/">
          VitTheDev
        </NavLink>
      </div>

      <NavLink activeClassName="Active" className="btn btn2" exact to="/mywork">
        My Work
      </NavLink>
      <NavLink activeClassName="Active" className="btn btn3" exact to="/bio">
        Bio
      </NavLink>
      <NavLink activeClassName="Active" to="/contact" className="btn btn4">
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;
