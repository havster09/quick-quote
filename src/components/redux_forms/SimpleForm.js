import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, getFormValues, formValueSelector } from 'redux-form';
import MyCustomInput from './MyCustomInput';

const validate = (values, props) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }/*
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
  errors._error = 'One Phone Number Required';*/
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
          <span className="error">
            {error}
          </span>) ||
          (warning &&
            <span className="warning">
              {warning}
            </span>))}
    </div>
  </div>;

const handleBlur = (event, newValue, previousValue) => {

};

let SimpleForm = props => {
  const { handleSubmit, onBlur } = props;
  return (
    <form onSubmit={handleSubmit}>
      <pre>
        {JSON.stringify(props, null, 4)}
      </pre>
      {props.error === 'One Phone Number Required' && <p>{props.error}</p>}

      <Field name="myField" component={MyCustomInput} onBlur={handleBlur}/>
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
        component={renderField}
        label="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

SimpleForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func
};

SimpleForm = reduxForm({
  form: 'simple',
  initialValues: {email: 'havster09@gmail.com', firstName: 'ewrwr', lastName: 'sdfdsf'},
  validate,
  warn
})(SimpleForm);

export default SimpleForm;
