import {combineReducers} from 'redux';


function drawer(state, action) {
  if (typeof state === 'undefined') return true;
  if (action.type !== 'TOGGLE_DRAWER') return state;
  return !state;
}


export default combineReducers({
  drawer,
});
