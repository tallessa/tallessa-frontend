import { createStore as _createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import clientMiddleware from './middlewares/clientMiddleware';

// Reducers
import routing from './modules/routing';
import config from './modules/config';

const reducer = combineReducers({
  reduxAsyncConnect,
  routing,
  config
});

export default function createStore(history, client, initialState) {
  const middleware = [
    clientMiddleware(client),
    promiseMiddleware,
    thunkMiddleware,
    routerMiddleware(history)
  ];

  let finalCreateStore;

  if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools'); // eslint-disable-line global-require
    const DevTools = require('./DevTool'); // eslint-disable-line global-require

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&]+)\b/
        )
      )
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  return finalCreateStore(reducer, initialState);
}
