import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    // Passando outro estado inicial
    // const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('changing the initial state', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
  
    expect(queryByText('5')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
  
    expect(queryByText('10')).toBeInTheDocument();

    const btn = queryByText(/Clique aqui/i);
    fireEvent.click(btn);

    expect(queryByText('11')).toBeInTheDocument();
  });
});
