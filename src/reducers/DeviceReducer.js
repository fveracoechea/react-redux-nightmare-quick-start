import { actionsTypes } from '../actions/DeviceActions';


const initialState = {
  isTouch: 'ontouchstart' in window || 'ontouchstart' in document.documentElement,
  pagination: 9,
  currentDevice: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.DEVICE_CHANGE_DEVICE:
      return {
        ...state,
        pagination: action.payload.pagination,
        currentDevice: action.payload.currentDevice,
      };
    case actionsTypes.DEVICE_GET_DEVICE:
      return {
        ...state,
        pagination: action.payload.pagination,
        currentDevice: action.payload.currentDevice,
      };
    default:
      return state;
  }
};
