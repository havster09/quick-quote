import React, { PropTypes } from 'react';
import Loop from './loop';
import LooperConsumer from './LoopConsumer';

class LooperScene extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loopIDReference: 0
    };

    this.handleUpdateLoopIdReference = this.handleUpdateLoopIdReference.bind(
      this
    );
  }

  static staticFire() {
    console.log('fire');
  }

  getChildContext() {
    return {
      loop: this.context.loop
    };
  }

  handleUpdateLoopIdReference() {
    this.setState({
      loopIDReference: this.state.loopIDReference + 1
    });
  }

  render() {
    return (
      <Loop>
        {JSON.stringify(this.context.loop, null, 4)}
        {[0,1,2].map((item, id) =>
          <LooperConsumer
            key={id}
            item={item}
            onUpdateLoopIdReference={this.handleUpdateLoopIdReference}
            loopId={this.state.loopIDReference}
          />
        )}
      </Loop>
    );
  }
}

LooperScene.propTypes = {
  // myProp: PropTypes.string.isRequired
};

LooperScene.contextTypes = {
  loop: PropTypes.object
};

LooperScene.childContextTypes = {
  loop: PropTypes.object
};

export default LooperScene;
