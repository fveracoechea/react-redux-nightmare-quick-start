// dependencies
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


// Create history
export const history = createBrowserHistory();
const router = routerMiddleware(history);

export const configureStore = (options, rootReducer) => {
  const { initialState = {} } = options;
  const middlewares = [
    thunk,
    router,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    }),
    reduxImmutableStateInvariant(),
  ];
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};
