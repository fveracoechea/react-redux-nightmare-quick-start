// dependencies
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxNightmare from 'redux-nightmare';

// Create history
export const history = createBrowserHistory();
// Create router middleware
const router = routerMiddleware(history);

export const configureStore = (options, rootReducer) => {
  const { initialState = {} } = options;
  const middlewares = [
    reduxNightmare,
    thunk,
    router,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
    }),
    reduxImmutableStateInvariant(),
  ];
  return createStore(
    connectRouter(history)(rootReducer), initialState, applyMiddleware(...middlewares)
  );
};
