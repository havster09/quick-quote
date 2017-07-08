import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as quickQuoteActions from '../../actions/quickQuoteActions';
import {store} from '../../index';
import * as PropTypes from 'react/lib/ReactPropTypes';

import QuickQuoteForm from "./QuickQuoteForm";


class QuickQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getValidationStateRequired = this.getValidationStateRequired.bind(this);
    this.getValidationStateEmail = this.getValidationStateEmail.bind(this);
    this.getValidationStateAmount = this.getValidationStateAmount.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCountryCodeSelect = this.handleCountryCodeSelect.bind(this);


    this.handleQuickQuote = this.handleQuickQuote.bind(this);
    this.state = {};
  }

  componentDidMount() {
    store.dispatch(quickQuoteActions.loadQuote());
  }

  getValidationStateRequired(input) {
    const {quickQuoteForm} = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const length = quickQuoteForm[input].length;
      return length > 0 ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  getValidationStateAmount(input) {
    const {quickQuoteForm} = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const amount = parseInt(quickQuoteForm.amount);
      return amount >= 250 ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  getValidationStateEmail(input) {
    const {quickQuoteForm} = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const value = quickQuoteForm[input];
      const emailPattern = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$");
      return emailPattern.test(value) ? 'success' : 'error';
    }
    else {
      return null;
    }
  }

  handleChange(e) {
    const id = e.target.id;
    store.dispatch(quickQuoteActions.setQuickQuoteForm({[id]: e.target.value}));
  }

  handleCountryCodeSelect(e) {
    store.dispatch(quickQuoteActions.setQuickQuoteForm({countryCode: e.target.text}));
  }

  handleFocus(e) {
    const {quickQuoteForm} = this.props;
    const idTouched = `${e.target.id}Touched`;
    if (!quickQuoteForm[idTouched]) {
      store.dispatch(quickQuoteActions.setQuickQuoteForm({[idTouched]: true}));
    }
  }

  handleQuickQuote() {
    const {quickQuoteForm} = this.props;
    console.log(JSON.stringify(quickQuoteForm));
  }

  render() {
    const {quickQuoteForm} = this.props;

    return (
      <div className="col-sm-6">
        <h1>New</h1>
        <QuickQuoteForm
          onGetValidationStateRequired={this.getValidationStateRequired}
          onGetValidationStateAmount={this.getValidationStateAmount}
          onGetValidationStateEmail={this.getValidationStateEmail}
          onHandleChange={this.handleChange}
          onHandleCountryCodeSelect={this.handleCountryCodeSelect}
          onHandleFocus={this.handleFocus}
          onHandleQuickQuote={this.handleQuickQuote}
          quickQuoteForm={quickQuoteForm}/>
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
