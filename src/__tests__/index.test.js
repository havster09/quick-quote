import React from 'react';
import { mount, shallow, render } from 'enzyme';
import QuickQuoteRefTest from '../components/quick-quote/QuickQuoteRefTest';
import SimpleWrapperConnected, { SimpleWrapper } from '../components/redux_forms/SimpleWrapper';

const smFunc = jest.fn();


beforeEach(() => {
  smFunc(1);
});

let wrapper = shallow(<QuickQuoteRefTest />);

describe('Our first test', () => {
  const n = null;
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should pass', () => {
    expect(true).toEqual(true);
    expect(2 + 3).toBe(5);
    expect(null).toBeNull();
  });
  it('should pass again', () => {
    expect(smFunc).toHaveBeenCalledWith(1);
    expect(smFunc).toHaveBeenCalled();
  });
});

describe('redux shallow', () => {
  wrapper = shallow(<SimpleWrapper />);
  const ComponentInstance = wrapper.instance();
  const spy = jest.spyOn(ComponentInstance, 'smFunc2');
  it('should invoke smFunc2', () => {
    ComponentInstance.handleSuccess();
    expect(spy).toHaveBeenCalledWith('yay');
  });
});
