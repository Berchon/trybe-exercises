/*
Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/
let rnd = require('./ex1.js');

test('Testando se a funcao foi chamada, qual o retorno e qntas vezes foi chamada', () => {
    const rnd = jest.fn()
        .mockReturnValue(10);
    
    expect(rnd).not.toHaveBeenCalled();
    expect(rnd()).toBe(10);
    rnd();
    expect(rnd).toHaveBeenCalledTimes(2);
});