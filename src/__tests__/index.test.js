import React from 'react';
import { mount, shallow } from 'enzyme';
import QuickQuoteRefTest from '../components/quick-quote/QuickQuoteRefTest';


const smFunc = jest.fn();

beforeEach(() => {
  smFunc(1);
});

const wrapper = shallow(<QuickQuoteRefTest/>);

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
