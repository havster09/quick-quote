import * as types from './actionTypes';

export function loadQuoteSuccess(quote) {
  return {
    type:types.LOAD_QUOTE_SUCCESS,
    quote
  };
}

export function loadQuote() {
  return function(dispatch) {
    return fetch(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/AUD/USD/10000?format=json`)
      .then(response => response.json())
      .then((data) => {
      dispatch(loadQuoteSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}



