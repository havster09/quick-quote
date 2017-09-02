import React from 'react';
import SimpleForm from './SimpleForm';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import submitAction from './submit';

export class SimpleWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.smFunc2 = this.smFunc2.bind(this);
  }

  smFunc2(msg) {
    console.log('handleSuccess', msg);
  }

  handleSuccess() {
    this.smFunc2('yay');
    return 'handleSuccess';
  }

  render() {
  return (
    <div>
        <button onClick={this.props.invokeSubmit}>Invoke</button>
      <SimpleForm
          onSubmitSuccess={this.handleSuccess}
        onSubmit={submitAction} />
    </div>
  );
  }

}

SimpleWrapper.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    crap: 'crap'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    invokeSubmit: () => {
      dispatch(submit('simple'));
    },
    handleSuccess: () => {
      console.log('handleSuccess');
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleWrapper);
