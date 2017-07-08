import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";

import {
  Button, ControlLabel, DropdownButton, Form, FormControl, FormGroup, InputGroup, MenuItem
} from 'react-bootstrap';

import {countryCodes} from "../../common/countryCodes";
import {currencyCodes} from "../../common/currencyCodes";

const QuickQuoteForm = ({quickQuoteForm, onGetValidationStateRequired, onGetValidationStateAmount, onGetValidationStateEmail, onHandleChange, onHandleCountryCodeSelect, onHandleFocus, onHandleQuickQuote}) => {
  const countryCodeOptions = countryCodes.map((countryCode) => {
    return <MenuItem key={`${countryCode.name}`} onClick={onHandleCountryCodeSelect}>{countryCode.dial_code}</MenuItem>;
  });

  const  currencyCodeOptions = Object.keys(currencyCodes).map((currencyCode, i) => {
    return (<option key={`${currencyCode}_${i}`} value={currencyCode}>{`${currencyCodes[currencyCode].name} [${currencyCode}]`}</option>);
  });
  return (
    <Form>
      <div className="col-sm-6">
        <FormGroup
          controlId="firstName"
          validationState={onGetValidationStateRequired('firstName')}>
          <ControlLabel className="required">First Name</ControlLabel>
          <FormControl
            type="text"
            value={quickQuoteForm.firstName}
            placeholder="First Name"
            onFocus={onHandleFocus}
            onChange={onHandleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          controlId="lastName"
          validationState={onGetValidationStateRequired('lastName')}>
          <ControlLabel className="required">Last Name</ControlLabel>
          <FormControl
            type="text"
            value={quickQuoteForm.lastName}
            placeholder="Last Name"
            onFocus={onHandleFocus}
            onChange={onHandleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>

      <div className="col-sm-12">
        <FormGroup
          controlId="email"
          validationState={onGetValidationStateEmail('email')}>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={quickQuoteForm.email}
            placeholder="Email"
            onFocus={onHandleFocus}
            onChange={onHandleChange}
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
              title={quickQuoteForm.countryCode}>
              {countryCodeOptions}
            </DropdownButton>
            <FormControl
              type="text"
              value={quickQuoteForm.phone}
              onChange={onHandleChange}
            />
          </InputGroup>
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup controlId="fromCurrency">
          <ControlLabel className="required">From Currency</ControlLabel>
          <FormControl
            componentClass="select"
            defaulValue={quickQuoteForm.fromCurrency}
            value={quickQuoteForm.fromCurrency}
            onChange={onHandleChange}>
            {currencyCodeOptions}
          </FormControl>
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup controlId="toCurrency">
          <ControlLabel className="required">To Currency</ControlLabel>
          <FormControl
            componentClass="select"
            defaulValue={quickQuoteForm.toCurrency}
            value={quickQuoteForm.toCurrency}
            onChange={onHandleChange}>
            {currencyCodeOptions}
          </FormControl>
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          controlId="amount"
          validationState={onGetValidationStateAmount('amount')}>
          <ControlLabel className="required">Amount</ControlLabel>
          <FormControl
            type="text"
            value={quickQuoteForm.amount}
            onFocus={onHandleFocus}
            onChange={onHandleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>

      <div className="col-sm-12">
        <Button type="button" onClick={onHandleQuickQuote}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

QuickQuoteForm.propTypes = {
  onGetValidationStateRequired: PropTypes.func.isRequired,
  onGetValidationStateAmount: PropTypes.func.isRequired,
  onGetValidationStateEmail: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleCountryCodeSelect: PropTypes.func.isRequired,
  onHandleFocus: PropTypes.func.isRequired,
  onHandleQuickQuote: PropTypes.func.isRequired,
  quickQuoteForm: PropTypes.object.isRequired
};

export default QuickQuoteForm;
