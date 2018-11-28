// actions types
import { actionTypes } from '../actions/Example';


const START = '/START';
const SUCCESS = '/SUCCESS';
const ERROR = '/ERROR';

const initialState = {
  message: '',
  movie: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MESSAGE_FOR_EXAMPLE:
      return {
        ...state,
        message: action.payload.message,
      };

    case actionTypes.FETCH_MOVIE + START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_MOVIE + SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_MOVIE + ERROR:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
