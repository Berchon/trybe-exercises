/*
Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
*/

let rnd1 = require('./ex3.js');

const rnd = jest.spyOn(rnd1, 'randomNumber')
    .mockImplementation((a, b, c) => a * b * c);
test('Redefinir a rnd fazer os testes e depois resetar', () => {

    expect(rnd).not.toHaveBeenCalled();
    expect(rnd(5, 2, 3)).toBe(30);
    expect(rnd).toHaveBeenCalledWith(5, 2, 3);
    expect(rnd).toHaveBeenCalledTimes(1);
});

test("Testando se a fun´cão foi resetada", () => {
    rnd.mockRestore();
    
    expect(rnd).not.toHaveBeenCalled();
    rnd();
    rnd();
    expect(rnd).toHaveBeenCalledWith();
    expect(rnd).toHaveBeenCalledTimes(2);
});

test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    rnd.mockReset();
    expect(rnd).toHaveBeenCalledTimes(0);

    rnd.mockImplementation(a => a * 2);

    expect(rnd(5)).toBe(10);
    expect(rnd).toHaveBeenCalled();
    expect(rnd).toHaveBeenCalledTimes(1);
    expect(rnd).toHaveBeenCalledWith(6);
  });