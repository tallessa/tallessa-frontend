import React from 'react';
import { Link, browserHistory } from 'react-router';

import SpeedDial from '../components/SpeedDial';
import HeaderContainer from '../containers/HeaderContainer';
import DrawerContainer from '../containers/DrawerContainer';
import SpeedDialContainer from '../containers/SpeedDialContainer';


const App = ({children}) => {
  return (
    <div>
      <HeaderContainer />
      <DrawerContainer />
      {children}
      <SpeedDialContainer />
    </div>
  );
};


export default App;
