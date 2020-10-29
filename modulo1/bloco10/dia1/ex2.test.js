const myRemove = require('./ex2.js');

describe('Testa uma função que remove um número de um array', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        const array = [1, 2, 3, 4];
        myRemove(array, 3)
        expect(array).toEqual([1, 2, 3, 4]);
    });

    test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});