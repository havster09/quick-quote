import React, { PropTypes } from 'react';
import ContextConsumer from './context-consumer';

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.subscriptions = [];
    this.state = {
      updatingNumber: 0
    };
  }
  getChildContext() {
    return { randomNum: 909090, updatingNumber: this.state.updatingNumber };
  }

  static doSomething() {
    return `something static for u`;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        updatingNumber: this.state.updatingNumber + 1
      });
    }, 1000);
  }

  subscribe(f) {
    this.subscriptions.push(f);
  }

  render() {
    return (
      <div>
        <h>Context Provider</h>
        <ContextConsumer />
        <ContextConsumer />
        <ContextConsumer />
      </div>
    );
  }
}

ContextProvider.propTypes = {
  // myProp: PropTypes.string.isRequired
};

ContextProvider.childContextTypes = {
  randomNum: PropTypes.number,
  updatingNumber: PropTypes.number
};

export default ContextProvider;
