/*
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

let rnd = require('./ex2.js');

test('mockar a funcao rnd uma unica vez para retornar a divisão de 2 numeros', () => {
    rnd = jest.fn()
        .mockImplementationOnce((a, b) => a / b);

    expect(rnd).not.toHaveBeenCalled();
    expect(rnd(10, 2)).toBe(5);
    expect(rnd).toHaveBeenCalledWith(10, 2);
    expect(rnd).toHaveBeenCalledTimes(1);
});