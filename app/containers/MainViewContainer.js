import {connect} from 'react-redux';

import MainView from '../components/MainView';


const mapStateToProps = (state, ownProps) => ({
  isDrawerOpen: state.elements.drawer,
  children: ownProps.children,
});

const mapDispatchToProps = () => ({});


const MainViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);


export default MainViewContainer;
