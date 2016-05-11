import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {routerReducer as routing} from 'react-router-redux';

import tallessa from './modules';
import promiseMiddleware from './middlewares/promiseMiddleware';


const reducers = combineReducers({
  tallessa,
  reduxAsyncConnect,
  routing,
});


export default () => createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(promiseMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
