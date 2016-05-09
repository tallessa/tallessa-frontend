import {connect} from 'react-redux';

import Gravatar from './Gravatar';


const mapStateToProps = state => ({
  name: state.getIn(['config', 'team', 'name']),
  email: state.getIn(['config', 'team', 'gravatarEmail']),
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
