import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function quickQuoteFormReducer(state = initialState.quickQuoteForm, action) {
  switch (action.type) {
    case types.UPDATE_FORM_SUCCESS:
      return action.quickQuoteForm;
    default:
      return state;
  }
}
