import React, {PropTypes} from 'react';


const MainView = ({isDrawerOpen, children}) => (
  <div
    style={{
      marginLeft: isDrawerOpen ? '256px' : 0,
    }}
  >
    {children}
  </div>
);


MainView.propTypes = {
  children: React.PropTypes.element.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};


export default MainView;
