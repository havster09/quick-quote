import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import QuickQuotePage from './components/quick-quote/QuickQuotePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={QuickQuotePage}/>
  </Route>
);


