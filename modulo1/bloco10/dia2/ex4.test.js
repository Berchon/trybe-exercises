/*
O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

const { expect } = require('@jest/globals');
const getRepos = require('./ex4.js');

const url = 'https://api.github.com/users/tryber/repos';

describe('Testando o retorno de uma API', () => {
    it('testando se a API retorna 2 valores específicos', () => {
        expect.assertions(2);
        return getRepos(url).then(lista => {
            expect(lista).toContain('sd-00-block5-project-pixels-art')
            expect(lista).toContain('event-project-color-guess')
        })
    });
});