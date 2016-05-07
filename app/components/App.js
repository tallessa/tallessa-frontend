import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';

import Drawer from '../components/Drawer';
import Header from '../components/Header';
import MainView from '../components/MainView';
import SpeedDial from '../components/SpeedDial';

import { getConfig, isConfigLoaded } from '../modules/config';

import '../styles/index.css';

@asyncConnect([{
  promise: ({ store }) => {
    if (!isConfigLoaded(store.getState())) {
      return store.dispatch(getConfig());
    }
  }
}])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Drawer />
        <MainView>{children}</MainView>
        <SpeedDial />
      </div>
    );
  }
}
