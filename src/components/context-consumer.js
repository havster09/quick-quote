import React, { PropTypes } from 'react';
import ContextProvider from './ContextProvider';

class ContentConsumer extends React.Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextContext.updatingNumber);
    console.log(ContextProvider.doSomething());
  }
  render() {
    return (
      <div>
        <h6>ContentConsumer</h6>
        <p>
          {this.context.randomNum}
        </p>
        <p>
          {this.context.updatingNumber}
        </p>
      </div>
    );
  }
}

ContentConsumer.propTypes = {
  // myProp: PropTypes.string.isRequired
};

ContentConsumer.contextTypes = {
  randomNum: PropTypes.number,
  updatingNumber: PropTypes.number
};

export default ContentConsumer;
