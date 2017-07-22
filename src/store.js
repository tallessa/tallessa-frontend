import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import tallessa from './modules';
import promiseMiddleware from './middlewares/promiseMiddleware';


export const history = createHistory();

const reducers = combineReducers({
  tallessa,
  router,
});


/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
/* eslint-enable */


export default () => createStore(
  reducers,
  undefined,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware,
      thunkMiddleware,
      promiseMiddleware(),
    ),
  ),
);
