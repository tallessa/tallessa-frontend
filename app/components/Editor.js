import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import SchemaForm from './SchemaForm';
// import getField from '../helpers/getField';


export default class Editor extends React.Component {
  static propTypes = {
    model: ImmutablePropTypes.map,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    schema: PropTypes.object.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }

  constructor() {
    super();
    this.save = this.save.bind(this);
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

    return false;
  }

  render() {
    const {schema, title, subtitle, onCancel, onDelete} = this.props;

    return (
      <Card>
        <CardHeader title={title} subtitle={subtitle}>
          <IconButton style={{float: 'right'}} onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </CardHeader>

        <CardText>
          <SchemaForm form="editor" schema={schema} onSubmit={this.save} />
        </CardText>

        <CardActions>
          <FlatButton label="Save" onClick={this.save} />
          <FlatButton label="Cancel" onClick={onCancel} />
          {this.isNew() ? null : (
            <FlatButton
              style={{float: 'right', color: 'red'}}
              label="Delete"
              onClick={onDelete}
            />
          )}
        </CardActions>
      </Card>
    );
  }
}
