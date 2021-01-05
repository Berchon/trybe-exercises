import React from 'react';
import { render, cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

// describe('Some test', () => {
//   test('Some test', () => {
//     expect(true).toBeTruthy();
//   });
// });

describe('Movie Cards Library CRUD tests', () => {
  test('Renders a "Carregando..." text right after rendering the element', () => {
    const { getByText } = render(<App />);

    expect(getByText('Carregando...')).toBeDefined();
  })

  test('Renders the movie titles after the page loads', async () => {
    const { queryByText } = render(<App />);

    await waitForDomChange();

    expect(queryByText('Carregando...')).toBeNull();
    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
    expect(queryByText('Ghost In The Shell')).not.toBeNull();
    expect(queryByText('Appleseed Alpha')).not.toBeNull();
    expect(queryByText('Resident Evil')).not.toBeNull();

  })

  test("Render the movie's details in a separate page when 'Ver detalhes' button is pressed", async () => {
    const { queryByText, queryByTestId } = render(<App />);

    await waitForDomChange();
    
    fireEvent.click(queryByTestId('KingsglaiveDetails'));
    
    await waitForDomChange();

    expect(queryByText('Genre: action')).not.toBeNull();
    expect(queryByText('Rating: 4.5')).not.toBeNull();
    
  })
})