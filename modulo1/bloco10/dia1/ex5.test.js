const {obj1, obj2, obj3} = require('./ex5.js');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    test('Testando o Obj1 e o Obj2', () => {
        expect(obj1).toEqual(obj2);
    });

    test('Testando o Obj1 e o Obj3', () => {
        expect(obj1).not.toEqual(obj3);
    });
});