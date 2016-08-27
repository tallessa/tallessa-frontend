import React, {PropTypes} from 'react';
import TextField from 'redux-form-material-ui/lib/TextField';
import {reduxForm, Field} from 'redux-form/immutable';


function getProperties(schema) {
  if (
    typeof schema.presentation !== 'undefined' &&
    typeof schema.presentation.propertyOrder !== 'undefined'
  ) {
    return schema.propertyOrder;
  } else {
    return Object.keys(schema.properties);
  }
}


@reduxForm()
export default class SchemaForm extends React.Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(submitEvent) {
    const {onSubmit} = this.props;
    submitEvent.preventDefault();
    if (typeof onSubmit !== 'undefined') onSubmit();
  }

  render() {
    const {schema} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {getProperties(schema).map(propertyName => {
          const field = schema.properties[propertyName];

          return (
            <div key={propertyName}>
              <Field
                name={propertyName}
                component={TextField}
                hintText={field.placeholder}
                floatingLabelText={field.title}
              />
            </div>
          );
        })}
      </form>
    );
  }
}
