import {connect} from 'react-redux';
import {toggleDrawer} from '../actions';

import {signOut} from '../actions';
import Drawer from '../components/Drawer';


const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.elements.drawer,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => dispatch(signOut()),
  };
}

const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);


export default DrawerContainer;
