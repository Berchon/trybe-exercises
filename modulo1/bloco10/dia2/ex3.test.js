/*
Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
Dica: Utilize o try/catch para o caso de erro.
*/
const { expect } = require('@jest/globals');
const { findUserById, getUserName } = require('./ex3.js');

it('Testando se a funcao getUserName retorna o nome', async () => {
    expect.assertions(1);
    const name = await getUserName(4);
    expect(name).toBe('Mark')
});

it('Testando se a funcao getUserName retorna erro', async () => {
    expect.assertions(1);
    try {
        await getUserName(2);
    } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' })
    }
});