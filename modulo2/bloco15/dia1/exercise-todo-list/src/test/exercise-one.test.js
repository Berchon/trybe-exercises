import React from 'react';
import { render, fireEvent, cleanup, getAllByRole, waitFor } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText,  getByRole} = render(<App />);

    const btn = getByRole('button');

    expect(btn).toHaveValue('Adicionar');
    expect(btn).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, async () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText, getAllByRole, getByRole} = render(<App />);
    
    const inputTask = getByLabelText('Tarefa:');
    const btn = getByRole('button');
    
    const TASK = 'Tarefa 1'
    fireEvent.change(inputTask, { target: { value: TASK } });
    
    expect(queryByText(TASK)).not.toBeInTheDocument();
    fireEvent.click(btn);
    expect(queryByText(TASK)).toBeInTheDocument();
    
    expect(inputTask).toHaveValue('');
  });
});

describe('GABARITO', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Verifica se ao ser clicado é adicionado o que o usuário digitou', () => {
    const { getByLabelText, queryByText } = render(<App />);

    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Beber agua!' } });
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Beber agua!')).toBeInTheDocument();
  });
});
