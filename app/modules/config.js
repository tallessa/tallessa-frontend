import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';
import promiseProps from 'promise-props';

import {get} from '../helpers/http';


const
  GET_CONFIG_REQUEST = 'tallessa/config/GET_CONFIG_REQUEST',
  GET_CONFIG_SUCCESS = 'tallessa/config/GET_CONFIG_SUCCESS',
  GET_CONFIG_FAILURE = 'tallessa/config/GET_CONFIG_FAILURE';

const initialState = Immutable.fromJS({
  loaded: false,
  team: {},
  user: {},
});


export default createReducer(initialState, {
  [GET_CONFIG_SUCCESS]: (state, action) => Immutable.fromJS(action.payload),
});


export function isConfigLoaded(rootState) {
  return rootState.tallessa.getIn(['config', 'loaded']);
}


export function getConfig() {
  return {
    types: [GET_CONFIG_REQUEST, GET_CONFIG_SUCCESS, GET_CONFIG_FAILURE],
    payload: promiseProps({
      loaded: true,
      user: get('/user'),
      team: get('/team'),
    }),
  };
}
