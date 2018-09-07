// actions types
import { actionTypes } from '../actions/Example';


const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE_FOR_EXAMPLE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
