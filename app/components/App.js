import React, {PropTypes} from 'react';

import Drawer from '../components/Drawer';
import Header from '../components/Header';
import MainView from '../components/MainView';
import SpeedDial from '../components/SpeedDial';


const App = ({children}) => (
  <div>
    <Header />
    <Drawer />
    <MainView>{children}</MainView>
    <SpeedDial />
  </div>
);


App.propTypes = {
  children: PropTypes.element,
};


export default App;
