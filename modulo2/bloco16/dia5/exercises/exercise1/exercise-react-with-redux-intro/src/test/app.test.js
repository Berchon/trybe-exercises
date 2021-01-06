import React from 'react'
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '../helpers/renderWithRedux';
import App from '../App';

const initialState = {
  moveCars: {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  }
};

const otherState = {
  initialState: {
    moveCars: {
      cars: {
        red: true,
        blue: true,
        yellow: true,
      },
    }
  }
};

describe('Testing if the components are on the page without changing the states', () => {
  test('if the page should has three buttons', () => {
    const { queryAllByText } = renderWithRedux(<App />);
    const buttons = queryAllByText(/move/i);
    expect(buttons.length).toBe(3);
  });

  test('if the page should has three images', () => {
    renderWithRedux(<App />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
  });

  test('if the three cars starts in the right place', () => {
    renderWithRedux(<App />);
    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image.className).toBe('car-left');
    });
  });

  test('if after clicking the buttons the cars change their position', () => {
    renderWithRedux(<App />);
    const buttons = screen.queryAllByText(/move/i);
    buttons.forEach(button => {
      fireEvent.click(button);
    });

    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image.className).toBe('car-right');
    });
  });
});

describe('Testing if the components are on the page with changing the states', () => {
  it('Insert the initial state and test whether the cars are in the correct position', () => {
    renderWithRedux(<App />, initialState);

    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image.className).toBe('car-left');
    });
  });

  it('Insert the initial state and test whether the cars are in the correct position', () => {
    renderWithRedux(<App />, otherState);

    const images = screen.getAllByRole('img');
    images.forEach(image => {
      expect(image.className).toBe('car-right');
    });
  });
});