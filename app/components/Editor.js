import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';


export default class Editor extends React.Component {
  static propTypes = {
    model: ImmutablePropTypes.map,
    onCreate: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    schema: PropTypes.object.isRequired,
  }

  render() {
    return <div>Editor</div>;
  }
}
