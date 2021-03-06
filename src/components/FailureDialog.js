import React from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/Button';


export default class FailureDialog extends React.Component {
  handleLogin() {
    window.location = 'http://localhost:8000/api-auth/login/';
  }

  render() {
    const actions = [
      <Button
        label="Log in"
        onTouchTap={this.handleLogin}
      />,
    ];

    return (
      <Dialog
        open
        actions={actions}
        modal={false}
        onRequestClose={this.handleClose}
      >
        <h2>Login required</h2>
        <p>You need to log in in order to access this page.</p>
      </Dialog>
    );
  }
}
