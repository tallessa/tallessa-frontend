import {connect} from 'react-redux';
import React, {PropTypes} from 'react';


const MainView = ({isDrawerOpen, children}) => (
  <div style={{
    margin: "1em",
    marginLeft: isDrawerOpen ? "calc(256px + 1em)" : 0
  }}>
    {children}
  </div>
);


MainView.propTypes = {
  children: React.PropTypes.element.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = (state, ownProps) => ({
  isDrawerOpen: state.tallessa.getIn(['ui', 'drawer']),
  children: ownProps.children,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
