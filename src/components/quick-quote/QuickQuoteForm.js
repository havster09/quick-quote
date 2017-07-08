import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";

const QuickQuoteForm = ({quickQuoteForm}) => {
  console.log(quickQuoteForm);
  return (
    <div>{}</div>
  );
};

QuickQuoteForm.propTypes = {
  quickQuoteForm: PropTypes.object.isRequired
};

export default QuickQuoteForm;
