import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";
import {Button} from "react-bootstrap";

const QuickQuoteSummary = ({quickQuoteForm, quickQuote}) => {
  if(quickQuote.Errors) {
    return (
      <div className="quick-quote-summary">
      <p>{quickQuote.Errors[0].Message}</p>
      </div>
    );
  }
  return (
    <div className="quick-quote-summary">
      <p className="quick-quote-summary__customer-rate">OFX Customer Rate</p>
      {quickQuote.CustomerRate && <p className="quick-quote-summary__customer-rate-value">{quickQuote.CustomerRate}</p>}
      <div className="quick-quote__currency-amount-container">
        <p className="quick-quote-summary__from-to">From</p>
        {quickQuoteForm.amount && <p><span className="quick-quote-summary__currency">{quickQuoteForm.fromCurrency}</span> <span className="quick-quote-summary__amount">{quickQuoteForm.amount}</span></p>}
      </div>

      <div className="quick-quote__currency-amount-container">
        <p className="quick-quote-summary__from-to">To</p>
        {quickQuote.CustomerAmount && <p><span className="quick-quote-summary__currency">{quickQuoteForm.toCurrency}</span> <span className="quick-quote-summary__amount">{quickQuote.CustomerAmount}</span></p>}
      </div>

      <div className="col-sm-12">
        <Button type="button" className="btn-primary">
          Start New Quote
        </Button>
      </div>
    </div>
  );
};

QuickQuoteSummary.propTypes = {
  quickQuote: PropTypes.object,
  quickQuoteForm: PropTypes.object.isRequired
};

export default QuickQuoteSummary;
