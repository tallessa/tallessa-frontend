import {connect} from 'react-redux';

import Gravatar from './Gravatar';


const mapStateToProps = state => ({
  name: state.tallessa.getIn(['config', 'team', 'name']),
  email: state.tallessa.getIn(['config', 'team', 'gravatarEmail']),
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
