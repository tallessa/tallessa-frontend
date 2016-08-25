import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';

import {get, post, put, del} from '../helpers/http';
import slugify from '../helpers/slugify';


const
  NEW_ITEM = 'tallessa/item/NEW_ITEM',
  GET_ITEM_REQUEST = 'tallessa/item/GET_ITEM_REQUEST',
  GET_ITEM_SUCCESS = 'tallessa/item/GET_ITEM_SUCCESS',
  GET_ITEM_FAILURE = 'tallessa/item/GET_ITEM_FAILURE',
  CREATE_ITEM_REQUEST = 'tallessa/item/CREATE_ITEM_REQUEST',
  CREATE_ITEM_SUCCESS = 'tallessa/item/CREATE_ITEM_SUCCESS',
  CREATE_ITEM_FAILURE = 'tallessa/item/CREATE_ITEM_FAILURE',
  UPDATE_ITEM_REQUEST = 'tallessa/item/UPDATE_ITEM_REQUEST',
  UPDATE_ITEM_SUCCESS = 'tallessa/item/UPDATE_ITEM_SUCCESS',
  UPDATE_ITEM_FAILURE = 'tallessa/item/UPDATE_ITEM_FAILURE',
  DELETE_ITEM_REQUEST = 'tallessa/item/DELETE_ITEM_REQUEST',
  DELETE_ITEM_SUCCESS = 'tallessa/item/DELETE_ITEM_SUCCESS',
  DELETE_ITEM_FAILURE = 'tallessa/item/DELETE_ITEM_FAILURE';


export default createReducer(null, {
  [NEW_ITEM]: (state, action) => Immutable.fromJS(action.payload),
  [GET_ITEM_SUCCESS]: (state, action) => Immutable.fromJS(action.payload),
}, false);


export function newItem() {
  return {
    type: NEW_ITEM,
    payload: {
      slug: null,
      name: '',
    },
  };
}


export function getItem(itemSlug) {
  return {
    types: [GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_FAILURE],
    payload: get(`/stuff/${itemSlug}`),
  };
}


export function createItem(item) {
  const enrichedItem = item.set('slug', slugify(item.get('name')));

  return {
    types: [CREATE_ITEM_REQUEST, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE],
    payload: post('/stuff', enrichedItem),
  };
}


export function updateItem(item) {
  return {
    types: [UPDATE_ITEM_REQUEST, UPDATE_ITEM_SUCCESS, UPDATE_ITEM_FAILURE],
    payload: put(`/stuff/${item.get('slug')}`, item),
  };
}


export function deleteItem(item) {
  return {
    types: [DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE],
    payload: del(`/stuff/${item.get('slug')}`),
  };
}
