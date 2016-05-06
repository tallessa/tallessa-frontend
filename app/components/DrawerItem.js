import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/lib/menus/menu-item';

import go from '../helpers/go';


const DrawerItem = ({path, icon, color, title, currentPath, strictMatch = false}) => {
  const isActive = strictMatch ? (currentPath === path) : (currentPath.indexOf(path) === 0);

  return (
    <MenuItem
      rightIcon={icon}
      onClick={go(path)}
      style={{
        borderLeft: color ? `4px solid ${color}` : 'none',
        fontWeight: isActive ? 'bold' : 'normal',
      }}
    >
      {title}
    </MenuItem>
  );
};


DrawerItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
  title: PropTypes.string,
  strictMatch: PropTypes.bool,
  currentPath: PropTypes.string.isRequired,
};


// TODO ObjectRestSpread
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isOpen: state.ui.drawer,
  currentPath: state.routing.locationBeforeTransitions.pathname,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerItem);
