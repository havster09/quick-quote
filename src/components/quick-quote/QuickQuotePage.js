import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quickQuoteActions from '../../actions/quickQuoteActions';
import {store} from '../../index';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {
  Button, ControlLabel, DropdownButton, Form, FormControl, FormGroup, InputGroup,
  MenuItem
} from 'react-bootstrap';

import {countryCodes} from "../../common/countryCodes";
import {currencyCodes} from "../../common/currencyCodes";
import QuickQuoteForm from "./QuickQuoteForm";


class QuickQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getValidationStateRequired = this.getValidationStateRequired.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCountryCodeSelect = this.handleCountryCodeSelect.bind(this);
    this.getValidationStateAmount = this.getValidationStateAmount.bind(this);

    this.handleQuickQuote = this.handleQuickQuote.bind(this);

    this.countryCodes = countryCodes;
    this.currencyCodes = currencyCodes;

    this.state = {
      firstName: '',
      firstNameTouched: null,
      lastName: '',
      lastNameTouched: null,
      email: '',
      countryCode: countryCodes[0].dial_code,
      phone: '',
      amount: '',
      amountTouched: null,
      fromCurrency: 'AUD',
      toCurrency: 'USD'
    };
  }

  componentDidMount() {
    store.dispatch(quickQuoteActions.loadQuote());
  }

  getValidationStateRequired(input) {
    const inputTouched = `${input}Touched`;
    if (this.state[inputTouched]) {
      const length = this.state[input].length;
      return length > 0 ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  getValidationStateAmount(input) {
    const inputTouched = `${input}Touched`;
    if (this.state[inputTouched]) {
      const amount = parseInt(this.state.amount);
      return amount >= 250 ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  getValidationStateEmail(input) {
    const inputTouched = `${input}Touched`;
    if (this.state[inputTouched]) {
      const value = this.state[input];
      const emailPattern = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$");
      return emailPattern.test(value) ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  handleChange(e) {
    const id = e.target.id;
    this.setState(Object.assign({}, this.state, {[id]: e.target.value}));
  }

  handleCountryCodeSelect(e) {
    this.setState(Object.assign({}, this.state, {countryCode: e.target.text}));
  }

  handleFocus(e) {
    const idTouched = `${e.target.id}Touched`;
    if (!this.state[idTouched]) {
      this.setState(Object.assign({}, this.state, {[idTouched]: true}));
    }
  }

  handleQuickQuote() {
    console.log(JSON.stringify(this.state));
  }

  render() {
    const countryCodes = this.countryCodes.map((countryCode) => {
      return <MenuItem key={`${countryCode.name}`} onClick={this.handleCountryCodeSelect}>{countryCode.dial_code}</MenuItem>;
    });

    const currencyCodes = Object.keys(this.currencyCodes).map((currencyCode, i) => {
      return (<option key={`${currencyCode.code}_${i}`} value={currencyCode.code}>{`${this.currencyCodes[currencyCode].name } [${currencyCode}]`}</option>);
    });
    const {quickQuoteForm} = this.props;
    return (
      <div className="col-sm-12">
        <QuickQuoteForm quickQuoteForm={quickQuoteForm}/>
        <Form>
          <div className="col-sm-6">
            <FormGroup
              controlId="firstName"
              validationState={this.getValidationStateRequired('firstName')}>
              <ControlLabel className="required">First Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.firstName}
                placeholder="First Name"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-6">
            <FormGroup
              controlId="lastName"
              validationState={this.getValidationStateRequired('lastName')}>
              <ControlLabel className="required">Last Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.lastName}
                placeholder="Last Name"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <FormGroup
              controlId="email"
              validationState={this.getValidationStateEmail('email')}>
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="Email"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <FormGroup
              controlId="phone">
              <ControlLabel>Telephone / Mobile</ControlLabel>
              <InputGroup>
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title={this.state.countryCode}>
                  {countryCodes}
                </DropdownButton>
                <FormControl
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>
          </div>

          <div className="col-sm-6">
            <FormGroup controlId="fromCurrency">
              <ControlLabel className="required">From Currency</ControlLabel>
              <FormControl
                componentClass="select"
                onChange={this.handleChange}
                value={this.state.fromCurrency}>
                {currencyCodes}
              </FormControl>
            </FormGroup>
          </div>

          <div className="col-sm-6">
            <FormGroup controlId="toCurrency">
              <ControlLabel className="required">To Currency</ControlLabel>
              <FormControl
                componentClass="select"
                onChange={this.handleChange}
                value={this.state.toCurrency}>
                {currencyCodes}
              </FormControl>
            </FormGroup>
          </div>

          <div className="col-sm-6">
            <FormGroup
              controlId="amount"
              validationState={this.getValidationStateAmount('amount')}>
              <ControlLabel className="required">Amount</ControlLabel>
              <FormControl
                type="text"
                value={this.state.amount}
                onFocus={this.handleFocus}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </div>

          <div className="col-sm-12">
            <Button type="button" onClick={this.handleQuickQuote}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

QuickQuotePage.propTypes = {
  quickQuoteActions: PropTypes.object.isRequired,
  quickQuoteForm: PropTypes.object.isRequired,
  quote: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    quote: state.quote,
    quickQuoteForm: state.quickQuoteForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quickQuoteActions: bindActionCreators(quickQuoteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuotePage);
