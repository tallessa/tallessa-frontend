import {connect} from 'react-redux';

import MainView from '../components/MainView';


const mapStateToProps = (state, ownProps) => {
  return {
    isDrawerOpen: state.elements.drawer,
    children: ownProps.children,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const MainViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);


export default MainViewContainer;
