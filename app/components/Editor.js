import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Card, CardHeader, CardActions} from 'material-ui/Card';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import getField from '../helpers/getField';


function getProperties(schema) {
  if (typeof schema.propertyOrder !== 'undefined') return schema.propertyOrder;
  return Object.keys(schema.properties);
}


export default class Editor extends React.Component {
  static propTypes = {
    model: ImmutablePropTypes.map,
    onCreate: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    onCancel: PropTypes.func,
    schema: PropTypes.object.isRequired,
  }

  render() {
    const {schema, model, onCancel} = this.props;

    return (
      <Card>
        <CardHeader title={getField(model, 'name')}>
          <IconButton style={{float: 'right'}} onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </CardHeader>

        <div>
          {getProperties(schema).map(propertyName =>
            <p key={propertyName}>{propertyName}</p>
          )}
        </div>

        <CardActions>
          <FlatButton label="Cancel" onClick={onCancel} />
          <FlatButton label="Save" />
        </CardActions>
      </Card>
    );
  }
}
