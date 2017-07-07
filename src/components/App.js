import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(App);
