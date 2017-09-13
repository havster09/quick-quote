import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'file?name=libphonenumber.js!./../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
// import './../../../node_modules/react-intl-tel-input/dist/main.css';
// import 'react-intl-tel-input/dist/main.css';

export default class MyCustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fu: 1
    };
  }
  componentDidMount() {
    this.phoneInput.tel.focus();
  }
  render() {
    const { input: { value, onChange, onBlur, onFocus } } = this.props;
    const phone = (
      <IntlTelInput
        css={['intl-tel-input', 'form-control']}
        fieldName="fu"
        onPhoneNumberChange={(status, value, country) =>
          onChange({ status, value, country })}
        onPhoneNumberBlur={(status, value, country) => onBlur()}
        utilsScript={'libphonenumber.js'}
        ref={(input) => this.phoneInput = input}
      />
    );

    const input = (
      <input
        type="text"
        onChange={value => onChange(value)}
        onBlur={value => onBlur(value)}
      />
    );

    return (
      <div>
        {this.state.fu === 1 ? phone : input}

        <code>
          <pre>
            {JSON.stringify(this.props, null, 4)}
          </pre>
        </code>
      </div>
    );
  }
}
