import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
// import getField from '../helpers/getField';


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
    title: PropTypes.string,
  }

  isNew() {
    const {model} = this.props;

    return !model.get('slug');
  }

  save() {
    const {onCreate, onUpdate, model} = this.props;

    if (this.isNew()) {
      onCreate(model);
    } else {
      onUpdate(model);
    }
  }

  render() {
    const {schema, title, onCancel, onDelete} = this.props;

    return (
      <Card>
        <CardHeader title={title}>
          <IconButton style={{float: 'right'}} onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </CardHeader>

        <CardText>
          {getProperties(schema).map(propertyName => {
            const field = schema.properties[propertyName];

            return (
              <TextField
                key={propertyName}
                name={propertyName}
                hintText={field.placeholder}
                floatingLabelText={field.title}
              />
            );
          })}
        </CardText>

        <CardActions>
          { this.isNew() ? null : (
            <FlatButton
              style={{float: 'right', color: 'red'}}
              label="Delete"
              onClick={onDelete}
            />
          )}
          <FlatButton label="Save" onClick={this.save} />
          <FlatButton label="Cancel" onClick={onCancel} />
        </CardActions>
      </Card>
    );
  }
}
