import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quickQuoteActions from '../../actions/quickQuoteActions';
import { store } from '../../index';
import * as PropTypes from 'react/lib/ReactPropTypes';

import QuickQuoteForm from './QuickQuoteForm';
import QuickQuoteSummary from './QuickQuoteSummary';
import QuickQuoteRefTest from './QuickQuoteRefTest';

class QuickQuotePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getValidationStateRequired = this.getValidationStateRequired.bind(
      this
    );
    this.getValidationStateEmail = this.getValidationStateEmail.bind(this);
    this.getValidationStateAmount = this.getValidationStateAmount.bind(this);
    this.handleParseAmount = this.handleParseAmount.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleCountryCodeSelect = this.handleCountryCodeSelect.bind(this);

    this.handleQuickQuote = this.handleQuickQuote.bind(this);
    this.handleResetQuote = this.handleResetQuote.bind(this);
    this.runChildRefMethod = this.runChildRefMethod.bind(this);
    this.getQQRef = this.getQQRef.bind(this);
    this.state = {};
    this.quickQuoteRefTest = null;
  }

  componentDidMount() {
    this.handleQuickQuote();
  }

  getValidationStateRequired(input) {
    const { quickQuoteForm } = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const length = quickQuoteForm[input].length;
      return length > 0 ? 'success' : 'error';
    } else {
      return null;
    }
  }

  getValidationStateAmount(input) {
    const { quickQuoteForm } = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const amount = parseInt(quickQuoteForm.amount);
      return amount > 0 ? 'success' : 'error';
    } else {
      return null;
    }
  }

  getValidationStateEmail(input) {
    const { quickQuoteForm } = this.props;
    const inputTouched = `${input}Touched`;
    if (quickQuoteForm[inputTouched]) {
      const value = quickQuoteForm[input];
      const emailPattern = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$');
      return emailPattern.test(value) ? 'success' : 'error';
    } else {
      return null;
    }
  }

  handleChange(e) {
    const id = e.target.id;
    store.dispatch(
      quickQuoteActions.setQuickQuoteForm({ [id]: e.target.value })
    );
    this.handleResetQuote();
  }

  handleCountryCodeSelect(e) {
    store.dispatch(
      quickQuoteActions.setQuickQuoteForm({ countryCode: e.target.text })
    );
  }

  handleFocus(e) {
    const { quickQuoteForm } = this.props;
    const idTouched = `${e.target.id}Touched`;
    if (!quickQuoteForm[idTouched]) {
      store.dispatch(
        quickQuoteActions.setQuickQuoteForm({ [idTouched]: true })
      );
    }
  }

  handleQuickQuote() {
    store.dispatch(quickQuoteActions.loadQuote());
  }

  handleResetQuote() {
    store.dispatch(quickQuoteActions.resetQuote());
  }

  handleParseAmount(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  runChildRefMethod() {
    console.log(this.quickQuoteRefTest.msg.woof(), this.quickQuoteRefTest.msg.hiss());
  }

  getQQRef(c) {
    this.quickQuoteRefTest = c;
  }

  render() {
    const { quickQuoteForm, quickQuote } = this.props;
    return (
      <div>
        <div className="col-sm-6 quick-quote">
          <button onClick={this.runChildRefMethod} className="btn btn-default">Woof</button>
          <h2 className="quick-quote__h2">Quick Quote</h2>
          <QuickQuoteForm
            onGetValidationStateRequired={this.getValidationStateRequired}
            onGetValidationStateAmount={this.getValidationStateAmount}
            onGetValidationStateEmail={this.getValidationStateEmail}
            onHandleChange={this.handleChange}
            onHandleCountryCodeSelect={this.handleCountryCodeSelect}
            onHandleFocus={this.handleFocus}
            onHandleQuickQuote={this.handleQuickQuote}
            quickQuoteForm={quickQuoteForm}
          />
        </div>

        <div className="col-sm-6 quick-quote">
          <h2 className="quick-quote__h2">Quick Quote</h2>
          {quickQuote.Message &&
            <QuickQuoteSummary
              quickQuoteForm={quickQuoteForm}
              quickQuote={quickQuote}
              onParseAmount={this.handleParseAmount}
              onResetQuote={this.handleResetQuote}
            />}
        </div>
        <QuickQuoteRefTest
          ref={this.getQQRef}
        />
        <button
          ref={(buttonRef) => this.buttonRef = buttonRef}
          className="btn btn-primary"
        >Test
        </button>
      </div>
    );
  }
}

QuickQuotePage.propTypes = {
  quickQuoteActions: PropTypes.object.isRequired,
  quickQuoteForm: PropTypes.object.isRequired,
  quickQuote: PropTypes.object.isRequired,
  handleResetQuote: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    quickQuote: state.quickQuote,
    quickQuoteForm: state.quickQuoteForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    quickQuoteActions: bindActionCreators(quickQuoteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickQuotePage);

/*
 todo validate for non numeric characters when setting amount
 todo validate numbers though google-libphonenumber
 todo finish css
*/
