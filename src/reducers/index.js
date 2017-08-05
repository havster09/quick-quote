import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import quickQuoteForm from "./quickQuoteFormReducer";
import quickQuote from "./quickQuoteReducer";

const rootReducer = combineReducers({
  quickQuoteForm,
  quickQuote,
  form: formReducer
});

export default rootReducer;
