// dependencies
import { combineReducers } from 'redux';
// reducers...
import example from './Example';
import device from './DeviceReducer';


const rootReducer = combineReducers({
  example,
  device,
});

export default rootReducer;
