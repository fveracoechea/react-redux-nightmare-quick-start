// actions types
import { SHOW_MESSAGE_FOR_EXAMPLE } from '../actions/HomePage';


const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE_FOR_EXAMPLE:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
