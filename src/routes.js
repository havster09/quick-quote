import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import QuickQuotePage from './components/quick-quote/QuickQuotePage';
import SimpleWrapper from './components/redux_forms/SimpleWrapper';
import ImmutableTests from './components/immutable-tests';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={() => <SimpleWrapper />}/>
    <Route path="/quote" component={QuickQuotePage}/>
    <Route path="/immutable" component={ImmutableTests}/>
  </Route>
);


