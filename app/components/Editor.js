import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';

import SchemaForm from './SchemaForm';
// import getField from '../helpers/getField';


@connect((state, ownProps) => ({
  formData: state.form.getIn([ownProps.name, 'values']),
}))
export default class Editor extends React.Component {
  static propTypes = {
    formData: ImmutablePropTypes.map,
    model: ImmutablePropTypes.map,
    name: PropTypes.string.isRequired,
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
    const {onCreate, onUpdate, model, formData} = this.props;
    const updatedModel = model.mergeDeep(formData);

    if (this.isNew()) {
      onCreate(updatedModel);
    } else {
      onUpdate(updatedModel);
    }

    return false;
  }

  render() {
    const {schema, name, title, model, subtitle, onCancel, onDelete} = this.props;

    return (
      <Card>
        <CardHeader title={title} subtitle={subtitle}>
          <IconButton style={{float: 'right'}} onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </CardHeader>

        <CardText>
          <SchemaForm form={name} initialValues={model} schema={schema} onSubmit={this.save} />
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
