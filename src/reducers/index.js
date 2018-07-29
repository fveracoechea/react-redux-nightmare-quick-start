// dependencies
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import reducers...
import home from './HomePageReducer';


const rootReducer = combineReducers({
  router,
  home,
});

export default rootReducer;
