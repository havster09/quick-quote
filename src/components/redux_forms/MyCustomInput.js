import React, { Component } from 'react';

export default class MyCustomInput extends Component {
  render() {
    const { input: { value, onChange, onBlur, onFocus } } = this.props;
    return (
      <div>
        <span>
        </span>
        <input type="text"
               onChange={(value) => onChange(value)}
               onBlur={(value) => onBlur(value)}
        />
        <code>
          <pre>
            {JSON.stringify(this.props, null, 4)}
          </pre>
        </code>
      </div>
    );
  }
}
