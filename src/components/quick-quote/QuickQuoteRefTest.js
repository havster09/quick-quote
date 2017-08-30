import React from 'react';

export default class QuickQuoteRefTest extends React.Component {
  constructor(props) {
    super(props);

    this.msg = {
      woof: () => console.log('woof')
    };
  }

  componentDidMount() {
    this.msg = Object.assign({}, this.msg, {
      hiss: () => console.log('hiss')
    });
  }

  getMessage() {
    console.log('ey');
  }

  render() {
    return (
      <div>
        <h1>Hello QuickQuoteRefTest</h1>
      </div>
    );
  }
}
