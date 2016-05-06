import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Avatar from 'material-ui/lib/avatar';
import Paper from 'material-ui/lib/paper';
import md5 from 'blueimp-md5';


// TODO Move this to backend
function getEmailHash(email) {
  const
    cache = getEmailHash.cache,
    normalizedEmail = email.trim().toLowerCase(),
    cached = [normalizedEmail];

  if (cached) return cached;

  return cache[normalizedEmail] = md5(normalizedEmail);
}
getEmailHash.cache = {};


const Gravatar = ({email=''}) => {
  const
    hash = getEmailHash(email),
    src = `https://secure.gravatar.com/avatar/${hash}?d=mm`

  return (
    <div style={{position: 'relative', top: '3px'}}>
      {/* XXX Unless height is specified, the paper is oval - bug in Material UI? */}
      <Paper circle style={{height: '40px'}}>
        <Avatar src={src} />
      </Paper>
    </div>
  );
};


Gravatar.propTypes = {
  email: PropTypes.string,
};


const mapStateToProps = state => ({
  email: state.config.user.email,
});

const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gravatar);
