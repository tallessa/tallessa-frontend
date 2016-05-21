import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';

import {get, post, put, del} from '../helpers/http';


const
  GET_STUFF_REQUEST = 'tallessa/stuff/GET_STUFF_REQUEST',
  GET_STUFF_SUCCESS = 'tallessa/stuff/GET_STUFF_SUCCESS',
  GET_STUFF_FAILURE = 'tallessa/stuff/GET_STUFF_FAILURE',
  CREATE_ITEM_REQUEST = 'tallessa/stuff/CREATE_ITEM_REQUEST',
  CREATE_ITEM_SUCCESS = 'tallessa/stuff/CREATE_ITEM_SUCCESS',
  CREATE_ITEM_FAILURE = 'tallessa/stuff/CREATE_ITEM_FAILURE',
  UPDATE_ITEM_REQUEST = 'tallessa/stuff/UPDATE_ITEM_REQUEST',
  UPDATE_ITEM_SUCCESS = 'tallessa/stuff/UPDATE_ITEM_SUCCESS',
  UPDATE_ITEM_FAILURE = 'tallessa/stuff/UPDATE_ITEM_FAILURE',
  DELETE_ITEM_REQUEST = 'tallessa/stuff/DELETE_ITEM_REQUEST',
  DELETE_ITEM_SUCCESS = 'tallessa/stuff/DELETE_ITEM_SUCCESS',
  DELETE_ITEM_FAILURE = 'tallessa/stuff/DELETE_ITEM_FAILURE';

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


export function createItem(item) {
  return {
    types: [CREATE_ITEM_REQUEST, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE],
    payload: post('/stuff', item),
  };
}


export function updateItem(item) {
  return {
    types: [UPDATE_ITEM_REQUEST, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE],
    payload: put(`/stuff/${item.slug}`, item),
  };
}


export function deleteItem(item) {
  return {
    types: [DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE],
    payload: del(`/stuff/${item.slug}`),
  };
}
