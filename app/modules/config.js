import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';
import promiseProps from 'promise-props';

import config from '../config';


const GET_CONFIG = 'tallessa/config/GET_CONFIG';


const initialState = Immutable.fromJS({
  pending: true,
  team: {},
  user: {},
});


function getCurrentTeam() {
  return fetch(`${config.backend.url}/api/v1/team`).then(res => res.json());
}


function getCurrentUser() {
  return fetch(`${config.backend.url}/api/v1/user`).then(res => res.json());
}


export default createReducer(initialState, {
  [GET_CONFIG]: (state, action) => {
    console.log('action', action)
    return Immutable.fromJS(action.payload);
  }
});


export function getConfig() {
  return {
    type: GET_CONFIG,
    payload: promiseProps({
      // pending: false,
      user: getCurrentUser(),
      team: getCurrentTeam(),
    }),
  };
}
