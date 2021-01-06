// demais imports...
import React from 'react';
import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import moveCars from '../reducers/moveCars';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ moveCars }), initialState),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export default renderWithRedux;