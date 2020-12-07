import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('verifica o título da página', () => {
//   const { getByText } = render(<App />);
//   const title = getByText(/Pokémon Cards/i);
//   expect(title).toBeInTheDocument();
// })

test('verifica o título da página', () => {
  render(<App />);
  const title = screen.getByText(/Pokémon cards/i);
  expect(title).toBeInTheDocument();
})

test('verifica se a input e o botão estão disponíveis', () => {
  render(<App />);

  const searchButton = screen.getByText(/Pesquisar/i);
  const inputText = screen.getByTestId('input-text');
  
  expect(searchButton).toBeInTheDocument();
  expect(inputText).toBeInTheDocument();
})

// test('o input recebe o valor pikachu', () => {
//   render(<App />);
//   const inputText = screen.getByTestId('input-text');
//   fireEvent.change(inputText, { target: { value: 'pikachu'} });
//   expect(inputText).toHaveValue('pikachu');
// })

test('o input recebe o valor pikachu', () => {
  render(<App />);
  const inputText = screen.getByTestId('input-text');
  userEvent.type(inputText, 'pikachu');
  expect(inputText).toHaveValue('pikachu');
})

const data = {
  cards: [
    {
      id: 'xyp-XY174',
      name: 'Pikachu-EX',
      types: ['Lightning'],
    },
  ],
};

test('o botão foi clicado e o fetch acionado', () => {
  global.fetch = jest.fn().mockResolvedValue(
    {
      json: jest.fn().mockResolvedValue(data)
    }
  )

  render(<App />);
  const inputText = screen.getByTestId('input-text');
  const searchButton = screen.getByText(/Pesquisar/i);

  userEvent.type(inputText, 'pikachu');
  fireEvent.click(searchButton);

  expect(global.fetch).toBeCalled();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://api.pokemontcg.io/v1/cards?name=pikachu')
})

test('o app renderiza as informações do cartão', async () => {
  global.fetch = jest.fn().mockResolvedValue(
    {
      json: jest.fn().mockResolvedValue(data)
    }
  )

  render(<App />);

  const inputText = screen.getByTestId('input-text');
  const searchButton = screen.getByText(/Pesquisar/i);

  userEvent.type(inputText, 'pikachu');
  fireEvent.click(searchButton);

  const nameElement = await screen.findByText(/Pikachu-EX/i);
  const typeElement = screen.getByText(/Lightning/i);
  const imgElement = screen.getByAltText(/Pikachu-EX-card/i);

  expect(nameElement).toBeInTheDocument();
  expect(typeElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();

})