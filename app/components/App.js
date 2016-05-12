import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-connect';

import Drawer from '../components/Drawer';
import AppBar from '../components/AppBar';
import MainView from '../components/MainView';
import SpeedDial from '../components/SpeedDial';
import {isConfigLoaded, getConfig} from '../modules/config';


@asyncConnect([{
  promise: ({store}) => {
    if (!isConfigLoaded(store.getState())) {
      return store.dispatch(getConfig());
    }

    return null;
  },
}])
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    store: PropTypes.object,
  }

  render() {
    const {children} = this.props;

    return (
      <div>
        <AppBar />
        <Drawer />
        <MainView>{children}</MainView>
        <SpeedDial />
      </div>
    );
  }
}
