// dependencies
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// import reducers...

const rootReducer = combineReducers({
  router,
});

export default rootReducer;
