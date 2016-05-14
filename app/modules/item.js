import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';


const
  SELECT_ITEM = 'tallessa/item/SELECT_ITEM';


export default createReducer(null, {
  [SELECT_ITEM]: (state, action) => action.payload,
}, false);


export function selectItem(item) {
  return {
    type: SELECT_ITEM,
    item: item,
  };
}
