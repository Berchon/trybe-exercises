// src/App.test.js
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
// import fetchMock from 'fetch-mock-jest';
import App from './App';
import renderWithRedux from './helper';
// const fetchMock = require('fetch-mock-jest');
const fetchMock = require('fetch-mock-jest')

describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});