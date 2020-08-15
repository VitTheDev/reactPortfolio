import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MyWork from './My Work/MyWork';
import Bio from './Bio/Bio';
import ProjectDetailPage from './My Work/ProjectDetailPage/ProjectDetailPage';
import Contact from './Contact/Contact';

import './App.scss';

const App = () => {
  return (
    <div className="app-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="main-content-container">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route
            exact
            path="/mywork"
            render={(props) => <MyWork {...props} />}
          />
          <Route
            exact
            path="/mywork/:id"
            render={(props) => <ProjectDetailPage {...props} />}
          />
          <Route exact path="/bio" render={() => <Bio />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route
            exact
            path="/github/"
            render={() =>
              (window.location =
                'https://github.com/VitTheDev?tab=repositories')
            }
          />
          <Route render={() => <h1>Oops, it seems the url doesn't exist</h1>} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
