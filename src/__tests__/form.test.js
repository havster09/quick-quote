import React from 'react';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { mount, shallow, render } from 'enzyme';

import SimpleWrapperConnected, {
  SimpleWrapper
} from '../components/redux_forms/SimpleWrapper';

const smFunc = jest.fn();

let store;
let wrapper;
let onSubmitSuccess;
let onSubmit;

describe('redux form test', () => {
  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    onSubmitSuccess = jest.fn();
    onSubmit = jest.fn();
    const props = {
      onSubmit,
      onSubmitSuccess
    };
    wrapper = mount(
      <Provider store={store}>
        <SimpleWrapperConnected {...props} />
      </Provider>
    );
  });

  it('shows error', () => {
    const inputFirstName = wrapper.find('input[name="firstName"]');
    inputFirstName.simulate('change', { target: { value: '' } });
    expect(wrapper.find('span.error')).toHaveLength(0);
    inputFirstName.simulate('blur');
    expect(wrapper.find('span.error')).toHaveLength(1);
  });

  it('submits', () => {
    const firstNameInput = wrapper.find('input[name="firstName"]');
    firstNameInput.simulate('change', { target: { value: 'Hadsffven' } });
    const lastNameInput = wrapper.find('input[name="lastName"]');
    lastNameInput.simulate('change', { target: { value: 'Rasdfsdfmos' } });
    const emailInput = wrapper.find('input[name="lastName"]');
    emailInput.simulate('change', { target: { value: 'sdfds@dsfdsf.com' } });
    const simpleForm = wrapper.find('SimpleForm');
    expect(simpleForm.props().submitFailed).toBeFalsy();
    wrapper.find('form').simulate('submit');
    expect(simpleForm.props().valid).toBeTruthy();
  });
});
