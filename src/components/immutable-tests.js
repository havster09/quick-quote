import React from 'react';
import { Map, List, fromJS } from 'immutable';
import * as PropTypes from 'react/lib/ReactPropTypes';
import { Button } from 'react-bootstrap';

const map1 = Map({ a: 1, b: 3 });
const map2 = map1.set('b', 33);
const clone = map2;
const smCrap = clone.toJS();

const list1 = List([
  'sdfsdfsdgf',
  'sdfsdfsdggrf',
  'sdfsdfsgggdf',
  'sdghjhgjhgfsdfsdf',
  'sdfsdfgdfgsdf'
]);

const list2 = List(['doggy', 'catty', 'smacky']);

const smList = list1.concat(list2).push('adolf');

const nested = fromJS({ a: { b: { c: [3, 4, 5] } } });
const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } });

console.log(nested2.toJS());
console.log(nested2.getIn(['a', 'b', 'c']));

const ImmutableTests = props => {
  return (
    <div className="quick-quote-summary well">
      <h1>Immutable Tests</h1>

      <pre>
        <code>
          {JSON.stringify(list1, null, 4)}
        </code>
      </pre>

      <ul>
        {smList.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )}
      </ul>

      <ul>
        {Object.keys(smCrap).map(item => {
          return (
            <li key={smCrap[item]}>
              {smCrap[item]}
            </li>
          );
        })}
      </ul>

      <Button type="button" className="btn-primary start-new-quote">
        Start New Quote
      </Button>
    </div>
  );
};

ImmutableTests.propTypes = {};

export default ImmutableTests;
