import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './modules';
import promiseMiddleware from './middlewares/promiseMiddleware';


export default () => createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(promiseMiddleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
