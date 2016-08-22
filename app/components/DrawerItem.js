import {connect} from 'react-redux';
import {Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import React, {PropTypes} from 'react';


const DrawerItem = ({href, icon, color, title, currentPath, onTouchTap, strictMatch = false}) => {
  if ((!href && !onTouchTap) || (href && onTouchTap)) {
    throw new Error('Exactly one of `href` and `onTouchTap` must be supplied.');
  }

  const
    isActive = href && (strictMatch ? (currentPath === href) : (currentPath.indexOf(href) === 0)),
    style = {
      borderLeft: color ? `4px solid ${color}` : 'none',
      paddingLeft: color ? 0 : 4,
      fontWeight: isActive ? 'bold' : 'normal',
    };

  if (href) {
    return (
      <MenuItem
        rightIcon={icon}
        style={style}
        containerElement={<Link to={href} />}
      >
        {title}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem
        rightIcon={icon}
        style={style}
        onTouchTap={onTouchTap}
      >
        {title}
      </MenuItem>
    );
  }
};


DrawerItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  title: PropTypes.string,
  strictMatch: PropTypes.bool,
  onTouchTap: PropTypes.func,
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
