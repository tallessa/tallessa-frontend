import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MenuItem from 'material-ui/MenuItem';

import go from '../helpers/go';


const DrawerItem = ({path, icon, color, title, currentPath, onClick, strictMatch = false}) => {
  if ((!path && !onClick) || (path && onClick)) {
    throw new Error('Exactly one of `path` and `onClick` must be supplied.');
  }

  const
    isActive = path && (strictMatch ? (currentPath === path) : (currentPath.indexOf(path) === 0));

  return (
    <MenuItem
      rightIcon={icon}
      onClick={onClick || go(path)}
      style={{
        borderLeft: color ? `4px solid ${color}` : 'none',
        paddingLeft: color ? 0 : 4,
        fontWeight: isActive ? 'bold' : 'normal',
      }}
    >
      {title}
    </MenuItem>
  );
};


DrawerItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  title: PropTypes.string,
  strictMatch: PropTypes.bool,
  onClick: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
};


// TODO ObjectRestSpread
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isOpen: state.tallessa.getIn(['ui', 'drawer']),
  currentPath: state.routing.locationBeforeTransitions.pathname,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerItem);
