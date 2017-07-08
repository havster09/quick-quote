import {combineReducers} from 'redux';
import quickQuoteForm from './quickQuoteFormReducer';
import quickQuote from './quickQuoteReducer';

const rootReducer = combineReducers({
  quickQuoteForm,
  quickQuote
});

export default rootReducer;
