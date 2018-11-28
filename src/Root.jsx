// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// routes
import Routes from './routes';
// global styles
import './assets/css/Root.css';
// get and listend devices
import { listenDevices, getDevice } from './utils/device';
import { getIinitialDevice } from './actions/DeviceActions';


const Root = (props) => {
  const { store, history } = props;
  listenDevices(store);
  store.dispatch(getIinitialDevice(getDevice));
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};
export default Root;
