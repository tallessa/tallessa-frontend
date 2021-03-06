import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import CloseIcon from 'material-ui-icons/Close';
import IconButton from 'material-ui/IconButton';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';

import SchemaForm from './SchemaForm';
import {showSnackbarMessage} from '../modules/ui';


function noop() {}


class Editor extends React.Component {
  static propTypes = {
    formData: ImmutablePropTypes.map,
    model: ImmutablePropTypes.map,
    name: PropTypes.string.isRequired,
    onCreate: PropTypes.func,
    onDelete: PropTypes.func,
    onReturn: PropTypes.func,
    onUpdate: PropTypes.func,
    schema: PropTypes.object.isRequired,
    showSnackbarMessage: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    onReturn: noop,
    onCreate: noop,
    onDelete: noop,
    onUpdate: noop,
  }

  constructor() {
    super();
    this.save = this.save.bind(this);
    this.del = this.del.bind(this);
  }

  isNew() {
    return !this.props.model.get('slug');
  }

  save() {
    const {onCreate, onUpdate, onReturn, model, formData, showSnackbarMessage, name} = this.props;
    const updatedModel = model.mergeDeep(formData);

    if (this.isNew()) {
      Promise.resolve(onCreate(updatedModel))
        .then(() => showSnackbarMessage(`editor.${name}.created`))
        .then(onReturn);
    } else {
      Promise.resolve(onUpdate(updatedModel))
        .then(() => showSnackbarMessage(`editor.${name}.updated`))
        .then(onReturn);
    }
  }

  del() {
    const {onDelete, onReturn, model, name} = this.props;

    if (this.isNew()) {
      throw new TypeError('Cowardly refusing to delete unsaved model');
    }

    Promise.resolve(onDelete(model))
      .then(() => showSnackbarMessage(`editor.${name}.deleted`))
      .then(onReturn);
  }

  render() {
    const {schema, name, title, model, subtitle, onReturn} = this.props;

    return (
      <Card>
        <CardHeader title={title} subtitle={subtitle}>
          <IconButton style={{float: 'right'}} onClick={onReturn}>
            <CloseIcon />
          </IconButton>
        </CardHeader>

        <CardText>
          <SchemaForm form={name} initialValues={model} schema={schema} onSubmit={this.save} />
        </CardText>

        <CardActions>
          <Button label="Save" onClick={this.save} />
          <Button label="Cancel" onClick={onReturn} />
          {this.isNew() ? null : (
            <Button
              style={{float: 'right', color: 'red'}}
              label="Delete"
              onClick={this.del}
            />
          )}
        </CardActions>
      </Card>
    );
  }
}


export default connect((state, ownProps) => ({
  formData: state.form.getIn([ownProps.name, 'values']),
}), {
  showSnackbarMessage,
})(Editor);
