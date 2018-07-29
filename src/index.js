import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';


// configure store
const store = configureStore({
  initialState: {},
}, rootReducer);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
