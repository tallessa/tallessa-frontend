import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as reduxAsyncConnect} from 'redux-connect';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as form} from 'redux-form/immutable';

import tallessa from './modules';
import promiseMiddleware from './middlewares/promiseMiddleware';


const reducers = combineReducers({
  tallessa,
  reduxAsyncConnect,
  routing,
  form,
});


export default () => createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(promiseMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
