import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

import Margin from './Margin';


export default class Breakfast extends React.Component {
  static propTypes = {
    messageKey: PropTypes.string,
    message: PropTypes.node,
  }

  render() {
    const
      {message} = this.props,
      eaten = false;  // TODO

    if (eaten) return null;

    return (
      <Margin>
        <Paper>
          <Margin>{message}</Margin>
        </Paper>
      </Margin>
    );
  }
}
