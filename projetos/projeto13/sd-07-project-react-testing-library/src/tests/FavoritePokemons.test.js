import React from 'react';
import { render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../components/renderWithRouter';

test('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
  const { getByText } = render(<FavoritePokemons />);
  const text = getByText('No favorite pokemon found');
  expect(text).toBeInTheDocument();
});

const pokemons = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Electric',
    averageWeight: {
      value: '6.0',
      measurementUnit: 'kg',
    },
    image: 'https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Kanto Viridian Forest',
        map: 'https://cdn.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
      },
      {
        location: 'Kanto Power Plant',
        map:
          'https://cdn.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
      },
    ],
    summary:
      'This intelligent Pokémon roasts .',
  },
  {
    id: 4,
    name: 'Charmander',
    type: 'Fire',
    averageWeight: {
      value: '8.5',
      measurementUnit: 'kg',
    },
    image: 'https://cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
    moreInfo:
      'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Alola Route 3',
        map: 'https://cdn.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 3',
        map: 'https://cdn.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
      },
      {
        location: 'Kanto Route 4',
        map: 'https://cdn.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
      },
      {
        location: 'Kanto Rock Tunnel',
        map:
          'https://cdn.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
      },
    ],
    summary:
      'The flame on its tail shows the strength of its life force.',
  },
];

describe('Testando o arquivo FavoritePokemons.js', () => {
  test('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<FavoritePokemons pokemons={ pokemons } />);
    const divs = document.getElementsByClassName('favorite-pokemon');
    const favoriteLength = 2;
    expect(divs.length).toBe(favoriteLength);
  });

  test('Teste se nenhum card de pokémon é exibido,se ele não estiver favoritado', () => {
    renderWithRouter(<FavoritePokemons />);
    const divs = document.getElementsByClassName('favorite-pokemon');
    const favoriteLength = 0;
    expect(divs.length).toBe(favoriteLength);
  });
});
