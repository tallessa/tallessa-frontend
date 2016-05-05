import React, {PropTypes} from 'react';


const MainView = ({isDrawerOpen, children}) => (
  <div style={{
    marginLeft: isDrawerOpen ? "256px" : 0,
  }}>
    {children}
  </div>
);


MainView.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
}


export default MainView;
