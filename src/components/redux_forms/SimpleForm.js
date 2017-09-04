import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, getFormValues, formValueSelector } from 'redux-form';

const validate = (values, props) => {
  console.log(props);
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.firstName && !values.lastName)
  errors._error = 'One Phone Number Required';
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.firstName === 'haven') {
    warnings.firstName = 'that is a savage name';
  }
  return warnings;
};

const aol = (value, allValues, props) => {
  console.log(allValues, props);
  if(!allValues.firstName && !allValues.lastName) {
    return 'at least one phone test';
  }
  return value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;
};


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>;

let SimpleForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
      {props.error === 'One Phone Number Required' && <p>{props.error}</p>}
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field
        name="email"
        type="email"
        validate={aol}
        component={renderField}
        label="Email"
      />
      <button type="submit" disabled={props.invalid}>Submit</button>
    </form>
  );
};

SimpleForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func
};

SimpleForm = reduxForm({
  form: 'simple',
  initialValues: {lastName: 'havster09@gmail.com'},
  validate,
  warn
})(SimpleForm);

export default SimpleForm;
