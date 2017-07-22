import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';

import {get} from '../helpers/http';


const
  GET_STUFF_REQUEST = 'tallessa/stuff/GET_STUFF_REQUEST',
  GET_STUFF_SUCCESS = 'tallessa/stuff/GET_STUFF_SUCCESS',
  GET_STUFF_FAILURE = 'tallessa/stuff/GET_STUFF_FAILURE';

const initialState = Immutable.fromJS([]);


export default createReducer(initialState, {
  [GET_STUFF_SUCCESS]: (state, action) => Immutable.fromJS(action.payload),
});


export function getStuff() {
  return {
    types: [GET_STUFF_REQUEST, GET_STUFF_SUCCESS, GET_STUFF_FAILURE],
    payload: get('/stuff'),
  };
}
