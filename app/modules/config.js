import {fromJS} from 'immutable';
import promiseProps from 'promise-props';

const GET_CONFIG = 'tallessa/config/GET_CONFIG';
const GET_CONFIG_SUCCESS = 'tallessa/config/GET_CONFIG_SUCCESS';
const GET_CONFIG_FAIL = 'tallessa/config/GET_CONFIG_FAIL';

const initialState = fromJS({
  pending: false,
  team: null,
  user: null
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CONFIG:
      return state.set('pending', true);

    case GET_CONFIG_SUCCESS:
      return state.merge(fromJS(action.payload, {pending: false}));

    case GET_CONFIG_FAIL:
      // TODO error handling
      return state.set('pending', false);

    default:
      return state;
  }
}

export function isConfigLoaded(global) {
  return global.config.get('team') && global.config.get('user');
}

export function getConfig() {
  return {
    types: [GET_CONFIG, GET_CONFIG_SUCCESS, GET_CONFIG_FAIL],
    promise: (client) => promiseProps({
      user: client.get('/user'),
      team: client.get('/team')
    })
  };
}
