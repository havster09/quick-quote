import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import QuickQuotePage from './components/quick-quote/QuickQuotePage';
import SimpleForm from './components/redux_forms/SimpleForm';

const handleSubmit = (values) => {
  console.log(values);
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={() => <SimpleForm onSubmit={handleSubmit}/>}/>
    <Route path="/quote" component={QuickQuotePage}/>
  </Route>
);


