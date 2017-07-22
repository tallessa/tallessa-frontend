import {connect} from 'react-redux';

import Gravatar from './Gravatar';


const mapStateToProps = state => ({
  name: state.tallessa.getIn(['config', 'user', 'displayName']),
  email: state.tallessa.getIn(['config', 'user', 'email']),
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
