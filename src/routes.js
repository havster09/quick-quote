import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import QuickQuotePage from './components/quick-quote/QuickQuotePage';
import SimpleWrapper from './components/redux_forms/SimpleWrapper';
import ImmutableTests from './components/immutable-tests';
import ContextProvider from './components/ContextProvider';
import LooperScene from './components/request-animation-frame/LooperScene';
import Loop from './components/request-animation-frame/loop';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={() => <SimpleWrapper />}/>
    <Route path="/quote" component={QuickQuotePage}/>
    <Route path="/immutable" component={ImmutableTests}/>
    <Route path="/context" component={ContextProvider}/>
    <Route path="/looper" component={() => <Loop><LooperScene/></Loop>}/>
  </Route>
);


