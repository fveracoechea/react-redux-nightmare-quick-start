// action
import { changeDevice } from '../actions/DeviceActions';
import { match, pipe } from './functionalStyle';


// Get device
export function getDevice() {
  if (match('(max-width: 567px)')) {
    return {
      pagination: 3,
      currentDevice: 'mobile',
    };
  }
  if (match('(max-width: 960px)')) {
    return {
      pagination: 6,
      currentDevice: 'tablet',
    };
  }
  if (match('(max-width: 1600px)')) {
    return {
      pagination: 9,
      currentDevice: 'desktop',
    };
  }
  if (match('(min-width: 1601px)')) {
    return {
      pagination: 12,
      currentDevice: 'tv',
    };
  }
}

const onResize = dispatch => () => pipe(
  getDevice,
  changeDevice,
  dispatch
)();

// deveice listener
export const listenDevices = ({ dispatch }) => window.addEventListener('resize', onResize(dispatch));
