/*
Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.
*/

const { it, expect } = require('@jest/globals');
const { resolve } = require('path');
const { findUserById, getUserName } = require('./ex2.js');

it('Testando se a funcao getUserName retorna resolve', () => {
    return expect(getUserName(4)).resolves.toBe('Mark')
});

describe('when the user id exists - GABARITO', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
  });

it('Testando se a funcao getUserName retorna reject', () => {
    return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' })
});

describe('when the user id does not exists - GABARITO', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(2).catch(error =>
        expect(error).toEqual({ error: 'User with 2 not found.' })
      );
    });
  });