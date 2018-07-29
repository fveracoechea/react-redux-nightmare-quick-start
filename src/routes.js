// dependecies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// containers
import App from './containers/App';
import HomePage from './containers/HomePageContainer';
// components


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/hi"
        render={() => (
          <h2>
            hola bbebe
          </h2>
        )}
      />
      <Route component={HomePage} />
    </Switch>
  </App>
);

export default Routes;
