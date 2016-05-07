import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import autobind from 'autobind-decorator';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import {blue500} from 'material-ui/lib/styles/colors';

import config from '../config';
import TeamAvatar from './TeamAvatar';
import UserAvatar from './UserAvatar';
import {toggleDrawer} from '../actions';
import Breadcrumb from './Breadcrumb';
import Gravatar from './Gravatar';

const currentViewColorSelector = state => state.ui.getIn(['currentView', 'color'], blue500);

const mapStateToProps = createSelector(
  currentViewColorSelector,
  (currentViewColor) => ({ currentViewColor })
);

@connect(mapStateToProps, { toggleDrawer })
export default class Header extends Component {
  static propTypes = {
    // would use these to document public 'API' for <Header>
    // onLeftButtonClick: PropTypes.func.isRequired,
    // currentViewColor: PropTypes.string,
  };

  @autobind
  onClick() {
    this.props.toggleDrawer();
  }

  render() {
    const { currentViewColor } = this.props;
    return (
      <AppBar
        title={<Breadcrumb />}
        style={{
          backgroundColor: currentViewColor
        }}
        iconElementLeft={
          <IconButton onClick={this.onClick}>
            <MenuIcon />
          </IconButton>
        }
        iconElementRight={<Gravatar />}
      />
    );
  }
}

@connect(mapStateToProps, { toggleDrawer })
export default class Header extends Component {
  static propTypes = {
    // would use these to document public 'API' for <Header>
    // onLeftButtonClick: PropTypes.func.isRequired,
    // currentViewColor: PropTypes.string,
  };

  @autobind
  onClick() {
    this.props.toggleDrawer();
  }

  render() {
    const { currentViewColor } = this.props;
    return (
      <AppBar
        title={<Breadcrumb />}
        style={{
          backgroundColor: currentViewColor
        }}
        iconElementLeft={
          <IconButton onClick={this.onClick}>
            <MenuIcon />
          </IconButton>
        }
        iconElementRight={<Gravatar />}
      />
    );
  }
}

// const Header = ({onLeftButtonClick, currentViewColor}) => (
//   <AppBar
//     title={<Breadcrumb />}
//     style={{
//       backgroundColor: currentViewColor || defaultAppBarColor,
//     }}
//     iconElementLeft={
//       <IconButton onClick={onLeftButtonClick}>
//         <MenuIcon />
//       </IconButton>
//     }
//     iconElementRight={<Gravatar />}
//   />
// );

// Header.propTypes = {
//   onLeftButtonClick: PropTypes.func.isRequired,
//   currentViewColor: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   currentViewColor: state.currentView.color,
// });

// const mapDispatchToProps = dispatch => ({
//   onLeftButtonClick: () => dispatch(toggleDrawer()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
