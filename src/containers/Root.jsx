// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// routes
import Routes from '../routes';
// global styles
import '../assets/css/Root.css';


const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};
export default Root;
