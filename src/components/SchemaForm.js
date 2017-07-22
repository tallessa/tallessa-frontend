import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';


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
            <TextField
              key={propertyName}
              name={propertyName}
              placeholder={field.placeholder}
              label={field.title}
            />
          );
        })}
      </form>
    );
  }
}
