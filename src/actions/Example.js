// dependencies
import { push } from 'connected-react-router';

// actions types
export const actionTypes = {
  SHOW_MESSAGE_FOR_EXAMPLE: 'SHOW_MESSAGE_FOR_EXAMPLE',
  FETCH_MOVIE: 'FETCH_MOVIE',
};

// simple action
export const showMessage = message => ({
  type: actionTypes.SHOW_MESSAGE_FOR_EXAMPLE,
  payload: { message },
});

// using redux-thunk and connected-react-router
export const pushTo404 = () => (dispatch) => {
  dispatch(showMessage('redirecting to 404'));
  setTimeout(() => {
    dispatch(push('/404'));
  }, 2000);
};

export const fetchMovie = () => ({
  type: actionTypes.FETCH_MOVIE,
  ajax: {
    route: 'http://www.omdbapi.com/?i=tt3896198&apikey=a95b5205',
  },
});
