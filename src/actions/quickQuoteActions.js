import * as types from './actionTypes';

export const loadQuoteSuccess = quote => {
  return {
    type: types.LOAD_QUOTE_SUCCESS,
    quote
  };
};

export const resetQuoteSuccess = quote => {
  return {
    type: types.RESET_QUOTE_SUCCESS,
    quote
  };
};

export const setQuickQuoteFormDone = quickQuoteForm => {
  return {
    type: types.UPDATE_FORM_SUCCESS,
    quickQuoteForm
  };
};

export const loadQuote = () => {
  return (dispatch, getState) => {
    let quickQuoteForm = getState().quickQuoteForm;
    return fetch(
      `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${quickQuoteForm.fromCurrency}/${quickQuoteForm.toCurrency}/${quickQuoteForm.amount}?format=json`
    )
      .then(response => response.json())
      .then(data => {
        dispatch(loadQuoteSuccess(data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const resetQuote = () => {
  return dispatch => {
    dispatch(resetQuoteSuccess({}));
  };
};

export const setQuickQuoteForm = value => {
  return (dispatch, getState) => {
    let quickQuoteForm = getState().quickQuoteForm;
    quickQuoteForm = Object.assign({}, quickQuoteForm, value);
    dispatch(setQuickQuoteFormDone(quickQuoteForm));
  };
};
