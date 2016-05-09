import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';

import reducers from './modules';


export default () => createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
