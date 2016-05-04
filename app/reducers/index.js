import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import elements from './elements';


const reducers = combineReducers({
  elements,
  routing: routerReducer,
});


export default reducers;
