import {connect} from 'react-redux';

import {signOut} from '../actions';
import Drawer from '../components/Drawer';


const mapStateToProps = state => ({
  isOpen: state.elements.drawer,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});


const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);


export default DrawerContainer;
