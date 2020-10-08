// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 'O Senhor dos Anéis';

function authorWith3DotsOnName(books) {
    return (books.filter((book) => {
        const splitedName = book.author.name.split(' ');
        if (splitedName.length < 3) {
            return;
        }
        if ((splitedName[0].length !== 2) ||
            (splitedName[1].length !== 2) ||
            (splitedName[2].length !== 2)) {
            return;
        }
        if ((!splitedName[0].endsWith('.')) ||
            (!splitedName[1].endsWith('.')) ||
            (!splitedName[2].endsWith('.'))) {
            return;
        }
        return (book);
    })
    .map(element => element.name)
    )
}

console.log('O erro que ocorre é pq é esperado uma string e o retorno é um array');
console.log('Fiz assim pq acho q faz mais sentido, pq pode haver mais de um autor');
console.log('com o nome que comece com 3 iniciais e um ponto (o que não é o caso desse exemplo');
assert.deepEqual(authorWith3DotsOnName(books), expected_result);

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).