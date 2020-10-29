const sum = require('./ex1.js');

describe('Testa a soma de dois números inteiros', () => {
    test('Testa se a soma retorna o número correto', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });

    test('Testa se a soma retorna algum erro quando é enviado uma string', () => {
        expect(() => { sum(4, '5') }).toThrow(); 
    });

    test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
        expect(() => { sum(4, '5') }).toThrow(/parameters must be numbers/); 
    });
});
