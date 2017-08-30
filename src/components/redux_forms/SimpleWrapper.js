import React from 'react';
import SimpleForm from './SimpleForm';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

const SimpleWrapper = ({ invokeSubmit }) => {
  return (
    <div>
      <button onClick={invokeSubmit}>Invoke</button>
      <SimpleForm />
    </div>
  );
};

SimpleWrapper.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    invokeSubmit: () => {
      dispatch(submit('simple'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleWrapper);
