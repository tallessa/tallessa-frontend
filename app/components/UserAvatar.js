import {connect} from 'react-redux';

import Gravatar from './Gravatar';


const mapStateToProps = state => ({
  name: state.config.user.displayName,
  email: state.config.user.email,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
