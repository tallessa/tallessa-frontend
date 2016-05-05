import React from 'react';
import { Link, browserHistory } from 'react-router';

import DrawerContainer from '../containers/DrawerContainer';
import HeaderContainer from '../containers/HeaderContainer';
import MainViewContainer from '../containers/MainViewContainer';
import SpeedDial from '../components/SpeedDial';
import SpeedDialContainer from '../containers/SpeedDialContainer';


const App = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      <DrawerContainer />
      <MainViewContainer>{children}</MainViewContainer>
      <SpeedDialContainer />
    </div>
  );
};


export default App;
