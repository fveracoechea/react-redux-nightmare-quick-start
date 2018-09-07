// dependecies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// containers
import HomePage from './containers/Home';
// components
import App from './components/App';


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        render={() => (
          <h2>
            404
          </h2>
        )}
      />
    </Switch>
  </App>
);

export default Routes;
