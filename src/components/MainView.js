import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';


const MainView = ({isDrawerOpen, children}) => (
  <div
    style={{
      margin: '1em',
      marginLeft: isDrawerOpen ? 'calc(256px + 1em)' : '1em',
    }}
  >
    {children}
  </div>
);


MainView.propTypes = {
  children: PropTypes.node,
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
