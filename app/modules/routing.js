import {Map} from 'immutable';
import {UPDATE_LOCATION} from 'react-router-redux';

const initialState = new Map({
  location: undefined
});

export default function routeReducer(state = initialState, action = {}) {
  const {type, location} = action;

  if (type !== UPDATE_LOCATION) {
    return state;
  }

  return state.merge({location});
}
