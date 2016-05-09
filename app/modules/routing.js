import {LOCATION_CHANGE} from 'react-router-redux';
import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';


const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});


export default createReducer(initialState, {
  [LOCATION_CHANGE]: (state, {payload}) => state.merge({locationBeforeTransitions: payload}),
})
