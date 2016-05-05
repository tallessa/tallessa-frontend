import React, {PropTypes} from 'react';

import DrawerContainer from '../containers/DrawerContainer';
import HeaderContainer from '../containers/HeaderContainer';
import MainViewContainer from '../containers/MainViewContainer';
import SpeedDialContainer from '../containers/SpeedDialContainer';


const App = ({children}) => (
  <div>
    <HeaderContainer />
    <DrawerContainer />
    <MainViewContainer>{children}</MainViewContainer>
    <SpeedDialContainer />
  </div>
);


App.propTypes = {
  children: PropTypes.element,
};


export default App;
