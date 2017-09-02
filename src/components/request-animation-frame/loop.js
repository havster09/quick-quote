import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";
import Looper from './looper';

export default class Loop extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.loop = new Looper();
  }

  getChildContext() {
    return {
      loop: this.loop
    };
  }

  componentDidMount() {
    this.loop.start();
  }

  componentWillUnmount() {
    this.loop.stop();
  }

  render() {
    return (
     <div>
       {this.props.children}
     </div>
    );
  }
}

Loop.propTypes = {
  // myProp: PropTypes.string.isRequired
};

Loop.childContextTypes = {
  loop: PropTypes.object
};


