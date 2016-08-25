import {combineReducers, createReducer} from 'redux-immutablejs';

// import store from '../store';
import timings from '../styles/timings';


const
  SIGN_OUT = 'tallessa/ui/SIGN_OUT',
  TOGGLE_DRAWER = 'tallessa/ui/TOGGLE_DRAWER',
  SHOW_SNACKBAR_MESSAGE = 'tallessa/ui/SHOW_SNACKBAR_MESSAGE',
  CLEAR_SNACKBAR_MESSAGE = 'tallessa/ui/CLEAR_SNACKBAR_MESSAGE';


const drawer = createReducer(true, {
  [TOGGLE_DRAWER]: state => !state,
}, false);


const snackbar = createReducer('', {
  [SHOW_SNACKBAR_MESSAGE]: (state, action) => action.payload.message,
  [CLEAR_SNACKBAR_MESSAGE]: (state, action) => {
    // Only clear the snackbar message if it is the one we originally set.
    if (state === action.payload.message) {
      return '';
    } else {
      return state;
    }
  },
}, false);


export default combineReducers({
  drawer,
  snackbar,
});


export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}


export function signOut() {
  return {
    type: SIGN_OUT,
  };
}


export function clearSnackbarMessage(message) {
  return {
    type: CLEAR_SNACKBAR_MESSAGE,
    payload: {
      message,
    }
  };
}


export function showSnackbarMessage(message) {
  return dispatch => {
    // Clear the message after timeout so that it does not reappear on navigation.
    setTimeout(
      () => dispatch(clearSnackbarMessage(message)),
      timings.snackbarCloseTimeout + timings.snackbarCloseAnimation
    );

    dispatch({
      type: SHOW_SNACKBAR_MESSAGE,
      payload: {
        message,
      },
    });
  };
}
