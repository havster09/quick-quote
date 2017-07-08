import {countryCodes} from "../common/countryCodes";

export default {
  quote:{},
  quickQuoteForm: {
    firstName: '',
    firstNameTouched: null,
    lastName: '',
    lastNameTouched: null,
    email: '',
    countryCode: countryCodes[0].dial_code,
    phone: '',
    amount: '',
    amountTouched: null,
    fromCurrency: 'AUD',
    toCurrency: 'USD'
  }
};
