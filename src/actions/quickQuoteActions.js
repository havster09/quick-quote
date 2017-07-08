import * as types from './actionTypes';
import {store} from '../index';

export const loadQuoteSuccess = (quote) => {
  return {
    type:types.LOAD_QUOTE_SUCCESS,
    quote
  };
};

export const setQuickQuoteFormDone = (quickQuoteForm) => {
  return {
    type: types.UPDATE_FORM_SUCCESS,
    quickQuoteForm
  };
};

export const loadQuote = () => {
  return (dispatch) => {
    return fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/USD/10000?format=json`)
      .then(response => response.json())
      .then((data) => {
      dispatch(loadQuoteSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
};

export const setQuickQuoteForm = (value) => {
  return (dispatch) => {
    let quickQuoteForm = store.getState().quickQuoteForm;
    quickQuoteForm = Object.assign({}, quickQuoteForm, value);
    dispatch(setQuickQuoteFormDone(quickQuoteForm));
  };
};





