import React, {PropTypes} from 'react';
import {asyncConnect} from 'redux-async-connect';

import Drawer from '../components/Drawer';
import Header from '../components/Header';
import MainView from '../components/MainView';
import SpeedDial from '../components/SpeedDial';
import {isConfigLoaded, getConfig} from '../modules/config';


@asyncConnect([{
  promise: ({store}) => {
    if (!isConfigLoaded(store.getState())) {
      return store.dispatch(getConfig());
    }
  },
}])
export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    const {children} = this.props;

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
