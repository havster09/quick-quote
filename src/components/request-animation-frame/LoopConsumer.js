import React, { PropTypes } from 'react';
import LooperScene from './LooperScene';

class LooperConsumer extends React.Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this, this.props);
  }

  componentDidMount() {
    this.loopID = this.context.loop.subscribe(this.animate);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps, nextContext);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.loopID);
  }

  animate() {
    console.log(this.props.loopId);
    if(this.context.loop.loopID % 1000 === 1) {
      this.props.onUpdateLoopIdReference();
      LooperScene.staticFire();
    }
  }

  render() {
    return (
     <p>Looper Consumer {this.props.item}</p>
    );
  }
}

LooperConsumer.propTypes = {
  // myProp: PropTypes.string.isRequired
  loopId: PropTypes.number,
  onUpdateLoopIdReference: PropTypes.func
};

LooperConsumer.contextTypes = {
  loop: PropTypes.object
};

export default LooperConsumer;
