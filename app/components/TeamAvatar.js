import {connect} from 'react-redux';

import Gravatar from './Gravatar';


const mapStateToProps = state => ({
  name: state.config.team.name,
  email: state.config.team.gravatarEmail,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
