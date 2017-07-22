import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import React from 'react';
import PropTypes from 'prop-types';


const DrawerItem = ({href, icon, color, title, currentPath, onTouchTap, history, strictMatch = false}) => {
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
      <ListItem button style={style} onTouchTap={() => history.push(href)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  } else {
    return (
      <ListItem button style={style} onTouchTap={onTouchTap}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  }
};


DrawerItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.element,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  strictMatch: PropTypes.bool,
  onTouchTap: PropTypes.func,
  currentPath: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

DrawerItem.defaultProps = {
  href: '',
  icon: null,
  color: null,
  title: '',
  strictMatch: false,
  onTouchTap: null,
};


// TODO ObjectRestSpread
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isOpen: state.tallessa.getIn(['ui', 'drawer']),
  currentPath: state.router.location ? state.router.location.pathname : '',
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(DrawerItem));
